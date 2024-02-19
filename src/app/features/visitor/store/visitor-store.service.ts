import {Injectable} from "@angular/core";
import {AppState} from "../../../store/app.reducer";
import {Store} from "@ngrx/store";
import {
  LoadActorCreators,
  LoadCategories,
  LoadFeaturedCreators,
  LoadNewCreators,
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





}
