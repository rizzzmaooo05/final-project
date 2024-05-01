import Header from "@/components/Header";
import { database } from "@/libs/database";

const Page = async ({ params }) => {
  const idPekerjaan = params.idPekerjaan;

  const db = database();
  const getDataFromDB = await db
    .from("detail_perusahaan__perusahaan")
    .select(
      `
        *
    `
    )
    .eq("id", params.idPerusahaan);

  const response = await getDataFromDB.data[0];

  return (
    <>
      <Header />
      <main>
        <div className="my-4 mx-auto p-4 w-[800px] border-2 border-red-500 rounded-lg">
          <h3 className="text-xl font-bold text-center mb-4">
            {response.nama}
          </h3>
          <p className="text-justify mb-1">
            <span className="font-bold pr-1">Deskripsi:</span>
            {response.deskripsi}
          </p>
          <p className="text-justify mb-1">
            <span className="font-bold pr-1">Ukuran Perusahaan:</span>
            {response.ukuran_perusahaan}
          </p>
          <p className="text-justify mb-1">
            <span className="font-bold pr-1">Alamat:</span>
            {response.alamat}
          </p>
          <p className="text-justify mb-1">
            <span className="font-bold pr-1">Kota:</span>
            {response.kota}
          </p>
          <p className="text-justify mb-1">
            <span className="font-bold pr-1">Negara Bagian:</span>
            {response.negara_bagian}
          </p>
          <p className="text-justify mb-1">
            <span className="font-bold pr-1">Negara:</span>
            {response.negara}
          </p>
          <p className="text-justify mb-1">
            <span className="font-bold pr-1">Kode Pos:</span>
            {response.kode_pos}
          </p>

        </div>
      </main>
    </>
  );
};

export default Page;
