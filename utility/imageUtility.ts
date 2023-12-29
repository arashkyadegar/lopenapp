export const getDefaultImageAvator = (img: string):string => {
  if (img === "") return "image_not_found.jpg";
  return process.env.NEXT_PUBLIC_BASEURL + "/data/uploads/" + img;;
};
