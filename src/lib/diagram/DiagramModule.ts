import go, { Diagram, Part, Map } from "gojs";
import type { NodeFile } from "$lib/file_management/file_classes";

const $ = go.GraphObject.make;
const diagram: Diagram = new go.Diagram();
const templateMap: Map<string, go.Part> = new go.Map<string, go.Part>();

diagram.nodeTemplateMap = templateMap;

const textFileTemplate: Part =
	$(go.Node, "Auto",
		$(go.Shape, {
			fromLinkable: true,
			toLinkable: true,
			portId: "",
			figure: "RoundedRectangle",
			height: 307,
			width: 220,
			fill: "#222222a0"
		}),
		$(go.Panel, "Vertical", {
			height: 297,
			width: 210,
			background: "#fafafaee"
		},
			$(go.TextBlock, {
				text: "Title",
				font: "small-caps 700 20px Monserrat, sans-serif",
				textAlign: "center",
				margin: new go.Margin(12, 5, 5, 12)
			}, new go.Binding("text", "name")),
			$(go.TextBlock, {
				text: "Default text of document.",
				font: "400 10px Monserrat sans-serif",
				spacingAbove: 3,
				maxLines: 17,
				margin: new go.Margin(0, 3, 0, 10),
				overflow: go.TextBlock.OverflowEllipsis
			}, new go.Binding("text", "data"))
		)
	);

const imageFileTemplate =
	$(go.Node, "Vertical",
		$(go.Panel, "Auto", {
			background: "#222222a0",
		},
			$(go.Shape, {
				fromLinkable: true,
				toLinkable: true,
				portId: "",
				figure: "RoundedRectangle",
				fill: "#fafafaee",
				cursor: "pointer"
			}),
			$(go.Picture, {
				margin: new go.Margin(10),
				imageStretch: go.GraphObject.Uniform
			}, 	new go.Binding("source", "data"),
				new go.Binding("width"),
				new go.Binding("height"))
		),
		$(go.TextBlock, {
			text: "Label",
			font: "small-caps 700 20px Monserrat, sans-serif",
			margin: new go.Margin(5)
		}, new go.Binding("text", "name"))
	);

templateMap.add("textFile", textFileTemplate);
templateMap.add("imageFile", imageFileTemplate);

diagram.model = new go.GraphLinksModel([ ]);

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