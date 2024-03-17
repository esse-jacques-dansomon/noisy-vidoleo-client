import {Actions, createEffect} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {CreatorService} from "../../../data/services/creator.service";
import {
  LoadActorCreatorsFailure,
  LoadActorCreatorsSuccess,
  LoadCategoriesFailure,
  LoadCategoriesSuccess,
  LoadFeaturedCreatorsFailure,
  LoadFeaturedCreatorsSuccess,
  LoadNewCreatorsFailure,
  LoadNewCreatorsSuccess, LoadSelectedCreatorDemandsSuccess,
  LoadSelectedCreatorFailure,
  LoadSelectedCreatorFeaturedCreatorsSuccess,
  LoadSelectedCreatorSuccess,
  SelectCategoryFailure,
  SelectCategorySuccess,
  VisitorActionType
} from "./visitor.action";
import {ofType} from "@ngrx/effects";
import {switchMap, map, catchError, of} from "rxjs";
import {PaginationType} from "../../../core/data/PaginationType";
import {Creator} from "../../../data/models/creator";
import {CategoryService} from "../../../data/services/category.service";
import {VisitorStoreService} from "./visitor-store.service";
import {Demande} from "../../../data/models/demande";

@Injectable()
export class VisitorEffects {

  loadFeaturedCreators$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VisitorActionType.LoadFeaturedCreators),
      switchMap(() =>
        this.creatorService.getOneByTypeAndUri$("featured")
          .pipe(
            map((data : PaginationType<Creator> ) => {
              return new LoadFeaturedCreatorsSuccess({
                data: data,
              });
            }),
            catchError((error) => of(new LoadFeaturedCreatorsFailure(error)))
          )
      )
    )
  );

  loadActorsCreators$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VisitorActionType.LoadActorCreators),
      switchMap(() =>
        this.creatorService.getOneByTypeAndUri$("category/acteurs")
          .pipe(
            map((data : PaginationType<Creator> ) => {
              return new LoadActorCreatorsSuccess({
                data: data,
              });
            }),
            catchError((error) => of(new LoadActorCreatorsFailure(error)))
          )
      )
    )
  );

  loadNewCreators$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VisitorActionType.LoadNewCreators),
      switchMap(() =>
        this.creatorService.getOneByTypeAndUri$("category/artistes")
          .pipe(
            map((data : PaginationType<Creator> ) => {
              return new LoadNewCreatorsSuccess({
                data: data,
              });
            }),
            catchError((error) => of(new LoadNewCreatorsFailure(error)))
          )
      )
    )
  );

  loadSelectedCreator$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VisitorActionType.LoadSelectedCreator),
      switchMap((action: {
        payload: { slug : string}
        }) =>
        this.creatorService
          .getBySlug$(action.payload.slug)
          .pipe(
            map((creator : Creator ) => {
              this.visitorStoreService.loadSelectedCreatorDemands(creator.id)
              this.visitorStoreService.loadSelectedCreatorFeaturedCreators(creator.sub_category.category.slug)
              return new LoadSelectedCreatorSuccess({
                creator: creator,
              });
            }),
            catchError((error) => of(new LoadSelectedCreatorFailure(error)))
          )
      )
    )
  );

  loadSelectedCreatorDemands$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VisitorActionType.LoadSelectedCreatorDemands),
      switchMap((action: {
          payload: { id : number}
        }) =>
        this.creatorService.getOneByTypeAndUriAndPage$('avis/' + action.payload.id, 1, '5')
            .pipe(
              map((data : PaginationType<Demande> ) => {
                return new LoadSelectedCreatorDemandsSuccess({
                  demands:  data
                });
              }),
              catchError((error) => of(new LoadSelectedCreatorFailure(error)))
            )
      )
    )
  );

  loadSelectedCreatorFeaturedCreators$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VisitorActionType.LoadSelectedCreatorFeaturedCreators),
      switchMap((action: {
          payload: { slug : string}
        }) =>
        this.creatorService.getOneByTypeAndUri$( 'category/'  + action.payload.slug)
            .pipe(
              map((creators : PaginationType<Creator> ) => {
                return new LoadSelectedCreatorFeaturedCreatorsSuccess({
                  creators: creators,
                });
              }),
              catchError((error) => of(new LoadSelectedCreatorFailure(error)))
            )
      )
    )
  );

  loadCategories$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VisitorActionType.LoadCategories),
      switchMap(() =>
        this.categoryService.getAll$()
          .pipe(
            map((data ) => {
              return new LoadCategoriesSuccess({
                categories: data.data,
              });
            }),
            catchError((error) => of(new LoadCategoriesFailure(error)))
          )
      )
    )
  );

  loadCategoryCreators$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VisitorActionType.SelectCategory),
      switchMap((action:  {slug : string}) =>
        this.categoryService
          .getOneByTypeAndUri$('category/' + action.slug)
          .pipe(
            map((data : PaginationType<Creator> ) => {
              return new SelectCategorySuccess({
                creators: data,
              });
            }),
            catchError((error) => of(new SelectCategoryFailure(error)))
          )
      )
    )
  );




  constructor(
    private actions$: Actions,
    private creatorService: CreatorService,
    private categoryService: CategoryService,
    private visitorStoreService : VisitorStoreService,
  ) {}
}
