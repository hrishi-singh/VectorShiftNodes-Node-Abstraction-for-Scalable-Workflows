import { DeploymentOptions } from "../helpers/dropDownLists"
import { InitialPlaceholder, LabeledNode, NodeConnectorHandles, SpannedTextDisplay } from "../helpers/handles"


export const DeploymentTool =({id,data})=>{
    const placeHolder= InitialPlaceholder(data?.deploy)
                       .assign('Deployment Options')
    return(
        <div className="container">
            {NodeConnectorHandles(id,"build").left()}
            {SpannedTextDisplay("Deployment")}
            {LabeledNode("Environment",placeHolder).selection(DeploymentOptions)}
            {NodeConnectorHandles(id,"deploy").right()}
        </div>
    )
}