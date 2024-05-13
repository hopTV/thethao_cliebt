// import { routes } from '@/utils/routes';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 0;
export default function NotFound() {
  return (
    <div className="w-full">
      <div className="mx-auto mt-[200px] text-center">
        <div className="flex items-center justify-center">
          <Image src={'/assets/img/logo/404-red.png'} height={120} width={120} alt="" />
          <h1 className="font-bold text-[2.5rem] ml-5 text-primary">404 - Page Not Found</h1>
        </div>
        <div className="mt-2">
          <p>Xin lỗi, trang này không tồn tại!</p>
          <p>Vui lòng quay lại để trải nghiệm những điều thú vị trong các phòng live.</p>
        </div>
        <div className="my-4 capitalize">
          <Link
            href="/"
            className="border-2 border-primary rounded-md p-2 px-4 text-[#000] mr-4 hover:bg-primary hover:text-white transition"
          >
            Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}
