import {Injectable} from "@angular/core";
import {AppState} from "../../../store/app.reducer";
import {Store} from "@ngrx/store";
import {
  LoadActorCreators,
  LoadCategories,
  LoadFeaturedCreators,
  LoadNewCreators, LoadSelectedCreator, LoadSelectedCreatorDemands, LoadSelectedCreatorFeaturedCreators,
  SelectCategory
} from "./visitor.action";
import {Category} from "../../../data/models/category";

@Injectable()
export class VisitorStoreService {
  private readonly store: Store<AppState>;

  constructor(store: Store<AppState>) {
    this.store = store;
  }

  loadFeaturedCreators() {this.store.dispatch(new LoadFeaturedCreators());}
  selectFeaturedCreators$ = () => this.store.select(state => state.visitor.creatorsState.featuredCreators);

  loadActorsCreators() {this.store.dispatch(new LoadActorCreators());}
  selectActorsCreators$ = () => this.store.select(state => state.visitor.creatorsState.actorsCreators);

  loadNewCreators() {this.store.dispatch(new LoadNewCreators());}
  selectNewCreators$ = () => this.store.select(state => state.visitor.creatorsState.newCreators);

  loadCategories() {this.store.dispatch(new LoadCategories());}
  selectCategories$ = () => this.store.select(state => state.visitor.categoriesState.categories);



  loadSelectedCategoryCreators(category: Category) {this.store.dispatch(new SelectCategory({
    category: category
  }));}
  selectSelectedCategory$ = () => this.store.select(state => state.visitor.categoriesState.selectedCategory);
  selectSelectedCategoryCreators$ = () => this.store.select(state => state.visitor.categoriesState.selectedCategoryCreators);


  loadSelectedCreator = (slug: string) => this.store.dispatch(new LoadSelectedCreator({slug : slug}))
  loadSelectedCreatorDemands = (id: number) => this.store.dispatch(new LoadSelectedCreatorDemands({id}))
  loadSelectedCreatorFeaturedCreators = (slug: string) => this.store.dispatch(new LoadSelectedCreatorFeaturedCreators({slug : slug}))
  selectedCreator = () => this.store.select(state => state.visitor.creatorState.selectedCreator)
  selectedCreatorDemands = () => this.store.select(state => state.visitor.creatorState.creatorDemands)
  selectedCreatorFeaturedCreators = () => this.store.select(state => state.visitor.creatorState.selectedCreatorsByCategory)

}
