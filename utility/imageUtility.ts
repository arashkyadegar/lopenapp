export const getDefaultImageAvator = (img: string): string => {
  if (img === "") {
    return "image_not_found.jpg";
  } else {
    //console.log(process.env.NEXT_PUBLIC_BASEURL + "/data/uploads/" + img+'.png');
    return process.env.NEXT_PUBLIC_BASEURL + "/data/uploads/" + img ;
  }
};
