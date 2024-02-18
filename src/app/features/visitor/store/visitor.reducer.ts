import {Creator} from "../../../data/models/creator";
import {Category} from "../../../data/models/category";
import {VisitorActions, VisitorActionType} from "./visitor.action";

export interface VisitorState {

  featuredCreators: Creator[],
  newCreators: Creator[],
  actorsCreators: Creator[],
  selectedCreator: Creator,

  categories: Category[],
  selectedCategory: Category,
  selectedCategoryCreators: Creator[],

  filter: {
    stars: string,
    keyword: string,
    minPrice: number,
    maxPrice: number,
    new: string,
    orderType: 'price-asc' | 'price-desc' | 'new'
  }
  filterCreators: Creator[],

  isLoading: boolean,
  error: any;
}

export const visitorInitialState: VisitorState = {
  selectedCreator: null,
  featuredCreators: [],
  newCreators: [],
  actorsCreators: [],
  filterCreators: [],
  filter: {
    stars: null,
    keyword: null,
    minPrice: null,
    maxPrice: null,
    new: null,
    orderType: "price-asc"
  },
  categories: [],
  selectedCategory: null,
  selectedCategoryCreators: [],
  isLoading: false,
  error: null
}


export function visitorReducer(state: VisitorState, action: VisitorActions): VisitorState {

  switch (action.type) {
    /**
     * Load Featured Creators : LoadFeaturedCreators, LoadFeaturedCreatorsSuccess, LoadFeaturedCreatorsFailure
     */
    case VisitorActionType.LoadFeaturedCreators:
      return {
        ...state,
        isLoading: true
      }

    case VisitorActionType.LoadFeaturedCreatorsSuccess:
      return {
        ...state,
        featuredCreators: state.featuredCreators
      }

    case VisitorActionType.LoadFeaturedCreatorsFailure:
      return {
        ...state,
        isLoading: false,
        error: state.error
      }


    /**
     * Load new Creators : LoadNewCreators, LoadNewCreatorsSuccess,LoadNewCreatorsFailure
     */
    case VisitorActionType.LoadNewCreators:
      return {
        ...state,
        isLoading: true
      }

    case VisitorActionType.LoadNewCreatorsSuccess:
      return {
        ...state,
        newCreators: state.newCreators
      }

    case VisitorActionType.LoadNewCreatorsFailure:
      return {
        ...state,
        isLoading: false,
        error: state.error
      }


    /**
     * Load actor Creators : LoadActorCreators LoadActorCreatorsSuccess,LoadActorCreatorsFailure
     */
    case VisitorActionType.LoadActorCreators:
      return {
        ...state,
        isLoading: true
      }

    case VisitorActionType.LoadActorCreatorsSuccess:
      return {
        ...state,
        actorsCreators: state.actorsCreators
      }

    case VisitorActionType.LoadActorCreatorsFailure:
      return {
        ...state,
        isLoading: false,
        error: state.error
      }


    /**
     * Load Selected Creator : LoadActorCreators LoadActorCreatorsSuccess,LoadActorCreatorsFailure
     */
    case VisitorActionType.LoadSelectedCreator:
      return {
        ...state,
        isLoading: true
      }

    case VisitorActionType.LoadSelectedCreatorSuccess:
      return {
        ...state,
        selectedCreator: state.selectedCreator
      }

    case VisitorActionType.LoadSelectedCreatorFailure:
      return {
        ...state,
        isLoading: false,
        error: state.error
      }

    /**
     * Load categories
     */
    case VisitorActionType.LoadCategories:
      return {
        ...state,
        isLoading: true
      }

    case VisitorActionType.LoadCategoriesSuccess:
      return {
        ...state,
        categories: state.categories
      }

    case VisitorActionType.LoadCategoriesFailure:
      return {
        ...state,
        isLoading: false,
        error: state.error
      }


    /**
     * Load Selected Category
      */
    case VisitorActionType.SelectCategory:
      return {
        ...state,
        selectedCategory: state.selectedCategory,
        isLoading: true
      }
    case VisitorActionType.SelectCategorySuccess:
      return {
        ...state,
        selectedCategoryCreators: state.selectedCategoryCreators
      }
    case VisitorActionType.SelectCategoryFailure:
      return {
        ...state,
        isLoading: false,
        error: state.error
      }

    /**
     * Load Filter
     */
    case VisitorActionType.ApplyFilter:
      return {
        ...state,
        filter: state.filter,
        isLoading: true
      }
    case VisitorActionType.ClearFilter:
      return {
        ...state,
        filter: visitorInitialState.filter,
        isLoading: true
      }
    case VisitorActionType.ApplyFilterSuccess:
      return {
        ...state,
        filterCreators: state.filterCreators
      }
    case VisitorActionType.ApplyFilterFailure:
      return {
        ...state,
        isLoading: false,
        error: state.error
      }

    default:
      return state
  }
}

