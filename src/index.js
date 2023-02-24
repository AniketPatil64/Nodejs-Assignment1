const fs = require('fs/promises')

//file create function

const myFileWriter = async (fileName, fileContent) => {
  await fs.writeFile(fileName, fileContent);
  console.log('File created successfully :',fileContent);
};
myFileWriter('exam.txt', 'Hello');


//file read function

const myFileReader = async (fileName) => {
  const data = await fs.readFile(fileName, 'utf8');
  console.log('File read successfully:', data);
};
myFileReader('exam.txt');


//file update function

const myFileUpdater = async (fileName, fileContent) => {
  const data = await fs.readFile(fileName, 'utf8');
  const updatedContent = data + fileContent;
  await fs.writeFile(fileName, updatedContent);
  console.log('File updated successfully :',updatedContent);
};
myFileUpdater('exam.txt', ' world...!');


//file delete function
const myFileDeleter = async (fileName) => {
  await fs.unlink(fileName)//unlink method is used to delete the file
	console.log(`The file ${fileName} has been deleted.`);

};
myFileDeleter('example.txt');


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };
