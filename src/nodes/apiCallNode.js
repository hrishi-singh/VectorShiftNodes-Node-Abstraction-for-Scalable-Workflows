import { InitialPlaceholder, LabeledNode, NodeConnectorHandles, SpannedTextDisplay } from "../helpers/handles"


export const ApiCallNode =({id,data})=>{
    const initialURL=InitialPlaceholder(data?.URL)
                        .replace(id,'customURL_','URL-')
    return(
        <div className="container">
            {SpannedTextDisplay("API Calls")}
            {LabeledNode("Enter URL",initialURL).input()}
            {SpannedTextDisplay("Connect to Fetch API")}
            {NodeConnectorHandles(id,"APIConnection").right()}
        </div>
    )
}