import go, { Part } from "gojs";

export const diagramTemplateMap = new go.Map<string, go.Part>() ;

const $ = go.GraphObject.make;

const textFileTemplate: Part =
	$(go.Node, "Auto",
		$(go.Shape, {
			fromLinkable: true,
			toLinkable: true,
			portId: "",
			figure: "RoundedRectangle",
			fill: "#222222a0"
		}),
		$(go.Panel, "Vertical", {
			height: 297,
			width: 210,
			margin: new go.Margin(10),
			background: "#fafafaee"
		},
			$(go.TextBlock, {
				text: "Title",
				font: "small-caps 700 20px Monserrat, sans-serif",
				textAlign: "center",
				margin: new go.Margin(10, 5, 5, 12)
			}, new go.Binding("text", "name")),
			$(go.TextBlock, {
				text: "Default text of document.",
				font: "400 10px Monserrat sans-serif",
				spacingAbove: 3,
				maxLines: 17,
				margin: new go.Margin(0, 10, 0, 10),
				overflow: go.TextBlock.OverflowEllipsis
			}, new go.Binding("text", "data"))
		)
	);

const imageFileTemplate =
	$(go.Node, "Vertical",
		$(go.Panel, "Auto",
			$(go.Shape, {
				fromLinkable: true,
				toLinkable: true,
				portId: "",
				figure: "RoundedRectangle",
				fill: "#222222a0",
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

diagramTemplateMap.add("textFile", textFileTemplate);
diagramTemplateMap.add("imageFile", imageFileTemplate);
