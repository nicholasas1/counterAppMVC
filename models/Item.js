class Item {
  constructor(id, title, description, image, price, oldPrice, discount) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.price = price;
    this.oldPrice = oldPrice;
    this.discount = discount;
  }
}

export const items = [
  new Item(
    "1",
    "Cabai Merah Keriting",
    "Cabai merah keriting memiliki ukuran kecil, bentuk memanjang, dan permukaan yang tidak rata. Umumnya digunakan sebagai penambah rasa pedas atau pewarna merah pada masakan. Cabai Keriting Imperfect disarankan untuk segera diolah dan tidak disimpan lebih dari 2 hari Terdapat potensi kelebihan/kekurangan gramasi +-10% per pack",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhs9PGEuBtei541Fpa0OnD0mCp9B1CPVek4F8KZfvYt7R6ScLzcv3sIy5hD-hOKPCT1XslVC_riOjvU6EL9ZNoJg93QXX6IVGZjtoSXJgOXH-GVLcM33A7h21kJak33aRpem9fF9XjsvBWX7GCQBaP_8WCgP5SMqCaR2uvg_03i8XCiQrzmlZ9LcteSXA/s707/cabai.jpg",
    "7.900",
    "14.500",
    "45"
  ),
  new Item(
    "2",
    "Bawang Bombay",
    "Tersedia dalam pilihan konvensional dan imperfect. Kulit bawang bombay imperfect agak terbuka. Namun rasa dan nutrisinya tetap sama. Simpan di tempat kering agar tetap tahan lama. Bawang bombay memiliki rasa agak pedas gurih dan teksturnya renyah. Cocok untuk teriyaki, onion ring, dan berbagai kreasi masakan lainnya. Terdapat potensi kelebihan/kekurangan gramasi +-10% per pack",
    "https://cdn1-production-images-kly.akamaized.net/aAlnFPckx6vuRUYpp0crcydooeQ=/1200x675/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4133924/original/060093500_1661315984-shutterstock_251460622.jpg",
    "19.900",
    "44.500",
    "55"
  ),
  new Item(
    "3",
    "Bawang Bombay Merah",
    "Daging buah tebal dan berwarna merah. Rasanya agak pedas gurih dan teksturnya renyah. Cocok untuk teriyaki, onion ring, dan berbagai kreasi masakan lainnya. Terdapat potensi kelebihan/kekurangan gramasi +-10% per pack",
    "https://asset.kompas.com/crops/0HGg-5em1FZrujbRoycfPlN0Bbk=/192x148:1728x1173/750x500/data/photo/2021/02/04/601c159d8024f.jpg",
    "27.900",
    "31.200",
    "10"
  ),
  new Item(
    "4",
    "Bawang Bombay Kupas",
    "Deskripsi Barang C",
    "https://awsimages.detik.net.id/community/media/visual/2021/04/07/tips-menyimpan-bawang-bombai.jpeg?w=731",
    "20.500",
    "20.900",
    "1"
  ),
  new Item(
    "5",
    "Bawang Merah",
    "Bawang Merah pilihan yang diproses khusus dan lebih kering dari bawang merah biasa, sehingga tidak mudah busuk dan tahan lebih dari 1 minggu di suhu ruang. Bawang Merah Konvensional lebih wangi dan pedas dibandingkan Bawang Merah Besar dan memiliki ukuran lebih beragam. Pengiriman sesuai ketersediaan dari petani di daerah Brebes, Nganjuk, atau Batu. ",
    "https://img-cdn.medkomtek.com/w12PQSwmXUZzynNq0YDrxNRnQA8=/730x411/smart/filters:quality(100):format(webp)/article/tpqx_7Ik9yLWFVOeJTs4W/original/052222900_1607682083-Manfaat-Bawang-Merah_-Antialergi-hingga-Menurunkan-Risiko-Kanker-shutterstock_1724962108.jpg",
    "20.000",
    "22.000",
    "5"
  ),
  new Item(
    "6",
    "Daun Bawang Organik",
    "Bawang daun memiliki kandungan serat yang tinggi. Sehingga dapat membantu melancarkan pencernaan, membantu meningkatkan kekebalan tubuh, dan rendah kalori.",
    "https://asset.kompas.com/crops/ZDHiomzv6DjEzAL4HHc9_DxNocg=/0x75:2365x1651/750x500/data/photo/2021/02/05/601cdf49d57cc.jpg",
    "21.900",
    "24.500",
    "10"
  ),
  new Item(
    "7",
    "Daun Lobak",
    "Umum dipakai untuk lalapan, namun bisa juga ditumis sederhana dengan bawang, cabai, dan saus tiram. Air rebusannya juga bermanfaat untuk meredakan masalah pencernaan.",
    "https://image.jpnn.com/resize/570x380-80/arsip/watermark/2019/11/06/daun-lobak-foto-exportersindia-66.jpg",
    "12.000",
    "13.300",
    "9"
  ),
  new Item(
    "8",
    "Daun Seledri",
    "Seledri adalah sayuran sekaligus tumbuhan obat, yang memiliki tangkai panjang berwarna hijau muda keputihan yang renyah dan daun tipis menyirip ganjil warna hijau tua. Daun dan tangkai seledri ini dapat dikonsumsi mentah atau diolah terlebih dahulu. Terdapat potensi kelebihan/kekurangan gramasi +-10% per pack Produk ini dapat digunakan sebagai menu MPASI",
    "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/06/30075319/Inilah-X-Manfaat-Daun-Seledri-untuk-Kesehatan.jpg",
    "5.500",
    "6.000",
    "8"
  ),
  new Item(
    "9",
    "Daun Lobak",
    "Umum dipakai untuk lalapan, namun bisa juga ditumis sederhana dengan bawang, cabai, dan saus tiram. Air rebusannya juga bermanfaat untuk meredakan masalah pencernaan.",
    "https://xnews.id/wp-content/uploads/2023/12/mini_photo1703511421.jpeg",
    "12.000",
    "13.300",
    "9"
  ),
  new Item(
    "10",
    "Daun Salam",
    "Selain sebagai penyedap rasa masakan, daun salam juga dapat mengatasi masalah pencernaan, meringankan rasa nyeri, mengatasi migrain, dan menunda munculnya uban.",
    "https://awsimages.detik.net.id/community/media/visual/2019/07/02/f7c394cf-6d71-407a-8666-b0b04f867ff2_169.jpeg?w=600&q=90",
    "1.200",
    "2.000",
    "40"
  ),
];

export default Item;
