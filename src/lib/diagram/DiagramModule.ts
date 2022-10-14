import go, { Diagram} from "gojs";
import { diagramTemplateMap } from "./DiagramNodeTemplate";
import type { NodeFile } from "$lib/file_management/file_classes";
import VisualiserMotionControl from "$lib/visualiser/VisualiserMotionControl";
import VisualiserStore from "$lib/visualiser/VisualiserStore";

const diagram: Diagram = new go.Diagram();

diagram.model = new go.GraphLinksModel([ ]);
diagram.nodeTemplateMap = diagramTemplateMap;

diagram.addDiagramListener("BackgroundSingleClicked", () => { 
	if (VisualiserMotionControl.toggle === true)
		VisualiserMotionControl.switch();
});

diagram.addDiagramListener("ObjectSingleClicked", (event) => {
	const newFileName: string = event.subject.part.data.name;
	const lastFile: NodeFile = VisualiserStore.get();
	if (lastFile === undefined || !VisualiserMotionControl.toggle) {
		VisualiserStore.set(newFileName);
		VisualiserMotionControl.switch();
	} else if (lastFile.name === newFileName)
		VisualiserMotionControl.switch();
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