interface MenuItem {
  imgSrc?: URL; // optional until get S3 setup
  title: string;
  description: string;
  cost: number;
}

export { MenuItem };
