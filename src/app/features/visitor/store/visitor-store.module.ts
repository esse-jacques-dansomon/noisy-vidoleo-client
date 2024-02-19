import {InjectionToken, NgModule} from "@angular/core";
import {visitorConfig} from "../visitorConfig";
import {StoreConfig, StoreModule} from "@ngrx/store";
import {visitorInitialState, visitorReducer, VisitorState} from "./visitor.reducer";
import {EffectsModule} from "@ngrx/effects";
import {VisitorEffects} from "./visitor.effects";
import {featureStoreConfigFactory, StoreStateService} from "../../../store";
import {CreatorService} from "../../../data/services/creator.service";
import {CategoryService} from "../../../data/services/category.service";
import {VisitorStoreService} from "./visitor-store.service";

const featureKey = visitorConfig.store.key;

export const visitorFeatureStoreKeyToken = new InjectionToken(`FeatureStoreKeyInjectionToken:${featureKey}`);
export const visitorFeatureStoreInitialStateToken = new InjectionToken<VisitorState>(
  `FeatureStoreInitialStateInjectionToken:${featureKey}`
);
export const visitorStoreFeatureConfigToken = new InjectionToken<StoreConfig<VisitorState>>(
  `FeatureStoreConfigInjectionToken:${featureKey}`
);

@NgModule({
  imports: [
    StoreModule.forFeature(featureKey, visitorReducer as any, visitorStoreFeatureConfigToken),
    EffectsModule.forFeature([VisitorEffects]),
  ],
  providers: [
    {
      provide: visitorFeatureStoreKeyToken,
      useValue: featureKey,
    },
    {
      provide: visitorFeatureStoreInitialStateToken,
      useValue: visitorInitialState,
    },
    {
      provide: visitorStoreFeatureConfigToken,
      deps: [visitorFeatureStoreKeyToken, visitorFeatureStoreInitialStateToken, StoreStateService],
      useFactory: featureStoreConfigFactory,
    },
    CreatorService,
    CategoryService,
    VisitorStoreService
  ],
})
export class VisitorStoreModule {}
