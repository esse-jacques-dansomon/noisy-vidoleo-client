import {Actions, createEffect} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {CreatorService} from "../../../data/services/creator.service";
import {
  LoadActorCreatorsFailure,
  LoadActorCreatorsSuccess, LoadCategoriesFailure, LoadCategoriesSuccess,
  LoadFeaturedCreatorsFailure,
  LoadFeaturedCreatorsSuccess, LoadNewCreatorsFailure, LoadNewCreatorsSuccess,
  VisitorActionType
} from "./visitor.action";
import {ofType} from "@ngrx/effects";
import {switchMap, map, catchError, of} from "rxjs";
import {PaginationType} from "../../../core/data/PaginationType";
import {Creator} from "../../../data/models/creator";
import {CategoryService} from "../../../data/services/category.service";

@Injectable()
export class VisitorEffects {

  loadFeaturedCreator$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VisitorActionType.LoadFeaturedCreators),
      switchMap(() =>
        this.creatorService
          .getOneByTypeAndUri$('featured')
          .pipe(
            map((data : PaginationType<Creator> ) => {
              return new LoadFeaturedCreatorsSuccess({
                creators: data.data,
              });
            }),
            catchError((error) => of(new LoadFeaturedCreatorsFailure(error)))
          )
      )
    )
  );

  loadFeaturedActorsCreator$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VisitorActionType.LoadActorCreators),
      switchMap(() =>
        this.creatorService
          .getOneByTypeAndUri$('category/acteurs')
          .pipe(
            map((data : PaginationType<Creator> ) => {
              return new LoadActorCreatorsSuccess({
                creators: data.data,
              });
            }),
            catchError((error) => of(new LoadActorCreatorsFailure(error)))
          )
      )
    )
  );

  loadNewCreator$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VisitorActionType.LoadNewCreators),
      switchMap(() =>
        this.creatorService
          .getOneByTypeAndUri$('new')
          .pipe(
            map((data : PaginationType<Creator> ) => {
              return new LoadNewCreatorsSuccess({
                creators: data.data,
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
        this.categoryService
          .getOneByTypeAndUri$('')
          .pipe(
            map((data ) => {
              return new LoadCategoriesSuccess({
                categories: data,
              });
            }),
            catchError((error) => of(new LoadCategoriesFailure(error)))
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
