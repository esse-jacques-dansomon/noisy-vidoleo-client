import {Action} from "@ngrx/store";
import {Category} from "../../../data/models/category";
import {Creator} from "../../../data/models/creator";


export enum VisitorActionType {

  LoadFeaturedCreators = '[Visitor] Load featured creators',
  LoadFeaturedCreatorsSuccess = '[Visitor] Load featured creators Success',
  LoadFeaturedCreatorsFailure = '[Visitor] Load featured creators Failure',

  LoadNewCreators = '[Visitor] Load new creators',
  LoadNewCreatorsSuccess = '[Visitor] Load new creators Success',
  LoadNewCreatorsFailure = '[Visitor] Load new creators Failure',

  LoadActorCreators = '[Visitor] Load actor creators',
  LoadActorCreatorsSuccess = '[Visitor] Load actor creators Success',
  LoadActorCreatorsFailure = '[Visitor] Load actor creators Failure',

  LoadSelectedCreator = '[Visitor] Load selected creator',
  LoadSelectedCreatorSuccess = '[Visitor] Load selected creatorSuccess',
  LoadSelectedCreatorFailure = '[Visitor] Load selected creator Failure',

  ClearFilter = '[Visitor] Clear filter',
  ApplyFilter = '[Visitor] Apply filter',
  ApplyFilterSuccess = '[Visitor] Apply filter Success',
  ApplyFilterFailure = '[Visitor] Apply filter failure',

  LoadCategories = '[Visitor] Load categories',
  LoadCategoriesSuccess = '[Visitor] Load categories Success',
  LoadCategoriesFailure = '[Visitor] Load categories Failure',

  SelectCategory = '[Visitor] Select category',
  SelectCategorySuccess = '[Visitor] Select category Success',
  SelectCategoryFailure = '[Visitor] Select category Failure',
}


/**
 *
 */
export class LoadFeaturedCreators implements Action {
  readonly type = VisitorActionType.LoadFeaturedCreators;
}

export class LoadFeaturedCreatorsSuccess implements Action {
  readonly type = VisitorActionType.LoadFeaturedCreatorsSuccess;
  constructor(public payload: { creators: Creator[] }) {}
}

export class LoadFeaturedCreatorsFailure implements Action {
  readonly type = VisitorActionType.LoadFeaturedCreatorsFailure;
  constructor(public payload: { error: any }) {}
}



export class LoadNewCreators implements Action {
  readonly type = VisitorActionType.LoadNewCreators;
}

export class LoadNewCreatorsSuccess implements Action {
  readonly type = VisitorActionType.LoadNewCreatorsSuccess;
  constructor(public payload: { creators: Creator[] }) {}
}

export class LoadNewCreatorsFailure implements Action {
  readonly type = VisitorActionType.LoadNewCreatorsFailure;
  constructor(public payload: { error: any }) {}
}

export class LoadActorCreators implements Action {
  readonly type = VisitorActionType.LoadActorCreators;
}

export class LoadActorCreatorsSuccess implements Action {
  readonly type = VisitorActionType.LoadActorCreatorsSuccess;
  constructor(public payload: { creators: Creator[] }) {}
}

export class LoadActorCreatorsFailure implements Action {
  readonly type = VisitorActionType.LoadActorCreatorsFailure;
  constructor(public payload: { error: any }) {}
}


/**
 *
 */
export class LoadSelectedCreator implements Action {
  readonly type = VisitorActionType.LoadSelectedCreator
  constructor(public payload: {slug : string}) {}
}

export class LoadSelectedCreatorSuccess implements Action {
  readonly type = VisitorActionType.LoadSelectedCreatorSuccess
  constructor(public payload: {creator : Creator}) {}
}

export class LoadSelectedCreatorFailure implements Action {
  readonly type = VisitorActionType.LoadSelectedCreatorFailure
  constructor(public payload: {error : any}) {}
}




export class ClearFilter implements Action {
  readonly type = VisitorActionType.ClearFilter;
}

export class ApplyFilter implements Action {
  readonly type = VisitorActionType.ApplyFilter;
  constructor(public payload: { filter: any }) {}

}

export class ApplyFilterSuccess implements Action {
  readonly type = VisitorActionType.ApplyFilterSuccess
  constructor(public payload: {creators: Creator[]}) {
  }
}

export class ApplyFilterFailure implements Action {
  readonly type = VisitorActionType.ApplyFilterFailure
  constructor(public payload: {error : any}) {}

}

export class LoadCategories implements Action {
  readonly type = VisitorActionType.LoadCategories;
}

export class LoadCategoriesSuccess implements Action {
  readonly type = VisitorActionType.LoadCategoriesSuccess;
  constructor(public payload: { categories: Category[] }) {}
}

export class LoadCategoriesFailure implements Action {
  readonly type = VisitorActionType.LoadCategoriesFailure;
  constructor(public payload: { error: any }) {}
}

export class SelectCategory implements Action {
  readonly type = VisitorActionType.SelectCategory;
  constructor(public payload: { category: Category }) {}
}

export class SelectCategorySuccess implements Action {
  readonly type = VisitorActionType.SelectCategorySuccess;
  constructor(public payload: { selectedCategory: Category }) {}
}

export class SelectCategoryFailure implements Action {
  readonly type = VisitorActionType.SelectCategoryFailure;
  constructor(public payload: { error: any }) {}
}




export type VisitorActions =
  | LoadFeaturedCreators
  | LoadFeaturedCreatorsSuccess
  | LoadFeaturedCreatorsFailure

  | LoadNewCreators
  | LoadNewCreatorsSuccess
  | LoadNewCreatorsFailure

  | LoadActorCreators
  | LoadActorCreatorsSuccess
  | LoadActorCreatorsFailure

  | LoadSelectedCreator
  | LoadSelectedCreatorSuccess
  | LoadSelectedCreatorFailure


  | ClearFilter
  | ApplyFilter
  | ApplyFilterSuccess
  | ApplyFilterFailure

  | LoadCategories
  | LoadCategoriesSuccess
  | LoadCategoriesFailure

  | SelectCategory
  | SelectCategorySuccess
  | SelectCategoryFailure;
