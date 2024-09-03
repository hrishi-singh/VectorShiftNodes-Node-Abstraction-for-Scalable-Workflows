import { InitialPlaceholder, LabeledNode, NodeConnectorHandles, SpannedTextDisplay } from "../helpers/handles";
import { ModelsOptions } from "../helpers/dropDownLists";
export const SemanticSearchNode = ({id,data})=>{
    
    const initialType =  InitialPlaceholder(data?.inputSearch)
                         .assign('Select Models')

    return(
        <div className="container">
        {SpannedTextDisplay("Semantic Search")}
        {LabeledNode("Model",initialType).selection(ModelsOptions)}
        {NodeConnectorHandles(id,"request").left()}
        {SpannedTextDisplay("Generate a temporary VectorDB")}
        {NodeConnectorHandles(id,"result").right()}
        </div>
    )
    
}