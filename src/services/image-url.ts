const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  // Here, we get all the characters from the beginning of the URL, all the way to the media parameter, including the media parameter itself
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
