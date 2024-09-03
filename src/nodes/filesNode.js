import { FileNameOptions } from "../helpers/dropDownLists"
import { InitialPlaceholder, LabeledNode, NodeConnectorHandles, SpannedTextDisplay } from "../helpers/handles"

export const Files =({id,data})=>{
    const initialValue = InitialPlaceholder(data?.files)
                         .assign("Select your File")
    return(
        <div className=".container">
            {SpannedTextDisplay("Files")}
            {LabeledNode("Choose",initialValue).selection(FileNameOptions)}
            {NodeConnectorHandles(id,"fileselection").right()}
        </div>
    )
}