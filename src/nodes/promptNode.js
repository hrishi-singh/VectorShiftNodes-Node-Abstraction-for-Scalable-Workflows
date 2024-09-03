import { ModelsOptions } from "../helpers/dropDownLists"
import { InitialPlaceholder, LabeledNode, NodeConnectorHandles, SpannedTextDisplay } from "../helpers/handles"


export const PromptNode= ({id,data})=>{
    const placeholder = InitialPlaceholder(data?.prompt)
                        .replace(id,'custom_prompt_','prompt-')
    const initialSelection= InitialPlaceholder(data?.promptType)
                            .assign('Models')

    return(
        <div className="container">
            {SpannedTextDisplay("Prompt Node")}
            {LabeledNode("Enter Prompt",placeholder).input()}
            {LabeledNode("Select Model",initialSelection).selection(ModelsOptions)}
            {SpannedTextDisplay("connect to process Model for Prompt")}
            {NodeConnectorHandles(id,"promptProcess").right()}
            {NodeConnectorHandles(id,"promptHistory",100/3).left()}
            {NodeConnectorHandles(id,"promptAnalyst",200/3).left()}

        </div>
    )
}