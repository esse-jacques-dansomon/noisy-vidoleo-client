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
  LoadNewCreatorsSuccess,
  SelectCategoryFailure,
  SelectCategorySuccess,
  VisitorActionType
} from "./visitor.action";
import {ofType} from "@ngrx/effects";
import {switchMap, map, catchError, of} from "rxjs";
import {PaginationType} from "../../../core/data/PaginationType";
import {Creator} from "../../../data/models/creator";
import {CategoryService} from "../../../data/services/category.service";

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
      switchMap((action:  {slug : string}) =>
        this.creatorService
          .getOneByTypeAndUri$('creator/' + action.slug)
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
    private categoryService: CategoryService
  ) {}
}
