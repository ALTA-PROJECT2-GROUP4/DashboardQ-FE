import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

const AddClass = () => {
  return (
    <Layout>
      <Navbar />
      <div className="pl-20">
        <p className="my-14 text-[32px] font-medium text-color1">
          Menambahkan Kelas
        </p>

        <div className="flex  items-center gap-4 text-[16px] font-medium text-color1">
          <p className="w-32">Class Name :</p>
          <CustomInput
            id="input-nama"
            type="text"
            placeholder="Contoh : Andre Taulani"
          />
        </div>

        <div className="mt-5 flex items-center text-[16px] font-medium text-color1 md:w-7/12 md:gap-4 lg:w-7/12 lg:gap-8">
          <p className="md:w-32 lg:w-28">User Name :</p>
          <select
            defaultValue={"DEFAULT"}
            id="input-role"
            name="option"
            className="select h-10 w-7/12 border-2 border-zinc-400  bg-[#EFFFFD] font-normal lg:w-7/12"
          >
            <option value="DEFAULT" disabled>
              Pilih Salah Satu
            </option>
            <option value="Mas Bagas">Mas Bagas</option>
            <option value="Mas Fakhry">Mas Fakhry</option>
          </select>
        </div>

        <div className="mr-16 mt-5 flex items-center gap-4 text-[16px] font-medium text-color1 md:float-none md:w-7/12 lg:float-left lg:w-4/12">
          <p className="w-32">Start Class :</p>
          <CustomInput
            id="input-startClass"
            type="date"
            placeholder="Contoh : 089678876654"
          />
        </div>

        <div className="mt-5 flex items-center gap-4 text-[16px] font-medium text-color1 md:float-none md:w-7/12 lg:float-left lg:w-4/12">
          <p className="w-32">End Class :</p>
          <CustomInput id="input-endClass" type="date" placeholder="" />
        </div>

        <div className="mb-20 flex gap-5 md:mt-14 lg:mt-32">
          <CustomButton id="btn-cancel" label="Kembali" />
          <CustomButton id="btn-cancel" label="Menambah Kelas" />
        </div>
      </div>
    </Layout>
  );
};

export default AddClass;
