import type { NodeFile } from "./file_classes";
import TextFile from "./file_classes/TextFile";

export default (fileToSort: File): NodeFile => {
	let newNodeFile: NodeFile;
	//	- TextFile is the default NodeClass
	//	- here files should be sorted
	newNodeFile = new TextFile(fileToSort);
	return (newNodeFile);
}