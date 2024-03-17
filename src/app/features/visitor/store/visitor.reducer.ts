import {Creator} from "../../../data/models/creator";
import {Category} from "../../../data/models/category";
import {LoadSelectedCreatorFeaturedCreators, VisitorActions, VisitorActionType} from "./visitor.action";
import {PaginationType} from "../../../core/data/PaginationType";
import {Demande} from "../../../data/models/demande";

export interface VisitorState {

  creatorsState: {
    featuredCreators: PaginationType<Creator>,
    newCreators: PaginationType<Creator>,
    actorsCreators: PaginationType<Creator>,
  }

  categoriesState: {
    categories: Category[],
    selectedCategory: Category,
    selectedCategoryCreators: PaginationType<Creator>,
  }

  creatorState: {
    selectedCreator: Creator,
    selectedCreatorsByCategory: PaginationType<Creator>,
    creatorDemands: PaginationType<Demande>,
  }

  filterState: {
    filter: {
      stars: string,
      keyword: string,
      minPrice: number,
      maxPrice: number,
      new: string,
      orderType: 'price-asc' | 'price-desc' | 'new'
    }
    filterCreators: PaginationType<Creator>,
  }

  isLoading: boolean,
  error: any;
}

export const visitorInitialState: VisitorState = {
  creatorsState: {
    featuredCreators: null,
    newCreators: null,
    actorsCreators: null,
  },

  categoriesState: {
    categories: null,
    selectedCategory: null,
    selectedCategoryCreators: null,
  },

  creatorState: {
    selectedCreator: null,
    selectedCreatorsByCategory: null,
    creatorDemands: null,
  },

  filterState: {
    filter: {
      stars: null,
      keyword: null,
      minPrice: null,
      maxPrice: null,
      new: null,
      orderType: null
    },
    filterCreators: null,
  },

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
        creatorsState: {
          ...state.creatorsState,
          featuredCreators: action.payload.data
        }
      }

    case VisitorActionType.LoadFeaturedCreatorsFailure:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
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
        creatorsState: {
          ...state.creatorsState,
          newCreators: action.payload.data
        }
      }

    case VisitorActionType.LoadNewCreatorsFailure:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
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
        creatorsState: {
          ...state.creatorsState,
          actorsCreators: action.payload.data
        }
      }

    case VisitorActionType.LoadActorCreatorsFailure:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      }


    /**
     * Load Selected Creator :
     * Load SelectedCreatorDemands
     * Load SelectedCreatorFeaturedCreators
     * LoadActorCreators
     * LoadActorCreatorsSuccess,
     * LoadSelectedCreatorDemandsSuccess
     * LoadSelectedCreatorFeaturedCreatorSuccess
     * LoadActorCreatorsFailure
     */
    case VisitorActionType.LoadSelectedCreator:
      return {
        ...state,
        isLoading: true,
        creatorState: {
          ...state.creatorState,
        }
      }

      case VisitorActionType.LoadSelectedCreatorDemands:
      return {
        ...state,
        isLoading: true,
        creatorState: {
          ...state.creatorState,
          creatorDemands: null,
        }
      }
      case VisitorActionType.LoadSelectedCreatorFeaturedCreators:
      return {
        ...state,
        isLoading: true,
        creatorState: {
          ...state.creatorState,
          selectedCreatorsByCategory: null
        }
      }

    case VisitorActionType.LoadSelectedCreatorSuccess:
      return {
        ...state,
        creatorState: {
          ...state.creatorState,
          selectedCreator: action.payload.creator
        }
      }

    case VisitorActionType.LoadSelectedCreatorDemandsSuccess:
      return {
        ...state,
        creatorState: {
          ...state.creatorState,
          creatorDemands: action.payload.demands
        }
      }

    case VisitorActionType.LoadSelectedCreatorFeaturedCreatorsSuccess:
      return {
        ...state,
        creatorState: {
          ...state.creatorState,
          selectedCreatorsByCategory: action.payload.creators
        }
      }

    case VisitorActionType.LoadSelectedCreatorFailure:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
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
        categoriesState: {
          ...state.categoriesState,
          categories: action.payload.categories
        }
      }

    case VisitorActionType.LoadCategoriesFailure:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      }


    /**
     * Load Selected Category
     */
    case VisitorActionType.SelectCategory:
      return {
        ...state,
        isLoading: true,
        categoriesState: {
          ...state.categoriesState,
          selectedCategory: action.payload.category
        }
      }
    case VisitorActionType.SelectCategorySuccess:
      return {
        ...state,
        categoriesState: {
          ...state.categoriesState,
          selectedCategoryCreators: action.payload.creators
        }
      }
    case VisitorActionType.SelectCategoryFailure:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      }

    /**
     * Load Filter
     */
    case VisitorActionType.ApplyFilter:
      return {
        ...state,
        isLoading: true,
        filterState: {
          ...state.filterState,
          filter: action.payload.filter
        }
      }
    case VisitorActionType.ClearFilter:
      return {
        ...state,
        isLoading: true,
        filterState: {
          ...state.filterState,
          filter: {
            stars: null,
            keyword: null,
            minPrice: null,
            maxPrice: null,
            new: null,
            orderType: null
          }
        }
      }
    case VisitorActionType.ApplyFilterSuccess:
      return {
        ...state,
        isLoading: false,
        filterState: {
          ...state.filterState,
          filterCreators: action.payload.data
        }
      }
    case VisitorActionType.ApplyFilterFailure:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      }

    default:
      return state
  }
}

