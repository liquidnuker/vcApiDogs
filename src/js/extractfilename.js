const extractFileName = function(url, ext) {
  let index = url.lastIndexOf("/") + 1;
  
  let filenameWithExtension = url.substr(index);
  let filename = filenameWithExtension.split(".")[0];
  filename = filename.replace(/(#|\?).*?$/, "");

  if (ext) {
    return filenameWithExtension;
  }   
  return filename;
};

export {extractFileName};