import go, { Diagram} from "gojs";
import { diagramTemplateMap } from "./DiagramNodeTemplate";
import type { NodeFile } from "$lib/file_management/file_classes";
import { toggleVisualiser } from "$lib/visualiser/VisualiserStore";
import VisualiserStore from "$lib/visualiser/VisualiserStore";

const diagram: Diagram = new go.Diagram();

diagram.model = new go.GraphLinksModel([ ]);
diagram.nodeTemplateMap = diagramTemplateMap;

diagram.addDiagramListener("BackgroundSingleClicked", () => { 
	if (toggleVisualiser.toggle === true)
		toggleVisualiser.set()
});

diagram.addDiagramListener("ObjectSingleClicked", (event) => {
	const newFileName: string = event.subject.part.data.name;
	const lastFile: NodeFile = VisualiserStore.get();
	if (lastFile === undefined || !toggleVisualiser.toggle) {
		toggleVisualiser.set();
		VisualiserStore.set(newFileName);
	} else if (lastFile.name === newFileName)
		toggleVisualiser.set();
	else
		VisualiserStore.set(newFileName);
});

export default {
	init(diagramDiv: HTMLDivElement) {
		diagram.div = diagramDiv;
	},

	async addFile(file: NodeFile) {
		const fileNodeToAdd = await file.node;
		diagram.commit((diagram) => {
			diagram.model.addNodeData(fileNodeToAdd);
		}, `adding ${fileNodeToAdd.category} to the diagram`)
	}
}