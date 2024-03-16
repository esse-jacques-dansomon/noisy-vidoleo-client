import {AppState} from "../../../store/app.reducer";
import {createSelector} from "@ngrx/store";
import {VisitorState} from "./visitor.reducer";

class VisitorSelector {

  public static selectVisitor = (state: AppState) => state.visitor;


  public static selectVisitorLoading = createSelector(
    VisitorSelector.selectVisitor,
    (visitor: VisitorState) => visitor.isLoading
  );

  public static selectVisitorError = createSelector(
    VisitorSelector.selectVisitor,
    (visitor: VisitorState) => visitor.error
  );


  public static selectCreatorsState  =  createSelector(
    VisitorSelector.selectVisitor,
    (visitor: VisitorState) => visitor.creatorsState
  );

  public static selectCategoriesState  =  createSelector(
    VisitorSelector.selectVisitor,
    (visitor: VisitorState) => visitor.categoriesState
  );

}
