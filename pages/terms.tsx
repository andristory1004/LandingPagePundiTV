import KetentuanPengguna from './term_components/ketentuan_pengguna';
import HKI from './term_components/hki';
import RepresentasiPengguna from './term_components/representasi_pengguna';
import PendaftaranPengguna from './term_components/pendaftaran_pengguna';

export default function Terms() {
    return (
        <div className='text-justify'>
            <KetentuanPengguna></KetentuanPengguna>
            <HKI></HKI>
            <RepresentasiPengguna></RepresentasiPengguna>
            <PendaftaranPengguna></PendaftaranPengguna>
        </div>
    );
}