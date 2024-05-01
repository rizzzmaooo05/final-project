import Header from "@/components/Header";
import { database } from "@/libs/database";

const Page = async ({ params }) => {
  const idPekerjaan = params.idPekerjaan;

  const db = database();
  const getDataFromDB = await db
    .from("lowongan_pekerjaan")
    .select(
      `
    *,
    detail_perusahaan__perusahaan(id, nama)
  `
    )
    .eq("id", params.idPekerjaan);

  const response = await getDataFromDB.data[0];

  return (
    <>
      <Header />
      <main>
        <div className="my-4 mx-auto p-4 w-[800px] border-2 border-red-500 rounded-lg">
          <h3 className="text-xl font-bold text-center mb-4">
            {response.judul}
          </h3>
          <p className="text-justify mb-1">
            <span className="font-bold pr-1">Perusahaan:</span>
            <a
              className="hover:font-bold hover:underline" href={`/perusahaan/${response.detail_perusahaan__perusahaan.id}`}
            >
              {response.detail_perusahaan__perusahaan.nama}
            </a>
          </p>
          <p className="text-justify mb-1">
            <span className="font-bold pr-1">Deskripsi:</span>
            {response.deskripsi}
          </p>
          <p className="text-justify mb-1">
            <span className="font-bold pr-1">Jenis Pekerjaan:</span>
            {response.jenis_pekerjaan_terformat}
          </p>
          <p className="text-justify mb-1">
            <span className="font-bold pr-1">Waktu Pembayaran Gaji:</span>
            {response.periode_pembayaran
              ? response.periode_pembayaran
              : "Tidak Tercantum"}
          </p>
          <p className="bg-red-500 text-white p-2 mt-2 text-center font-bold rounded-lg">
            <a href={response.url_posting_pekerjaan}>Lamar Sekarang</a>
          </p>
        </div>
      </main>
    </>
  );
};

export default Page;
