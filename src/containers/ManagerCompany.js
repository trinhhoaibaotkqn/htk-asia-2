import './ManagerContainer.scss';
import './ResTablet.scss';
import './ResMobile.scss';
import { TbCheckbox, TbClockPlay } from 'react-icons/tb';
import { FiCheckCircle } from 'react-icons/fi';
import { MdOutlineGames, MdTouchApp, MdPointOfSale } from 'react-icons/md';
import { BsQrCodeScan } from 'react-icons/bs';
import { FaChartLine, FaLaptopCode } from 'react-icons/fa';
import { AiFillCalculator } from 'react-icons/ai';
import { IoIosPeople, IoIosArrowForward } from 'react-icons/io';
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.jpg";
import pic7 from "../assets/pic7.jpg";
import { BsPersonPlus, BsBoxes } from 'react-icons/bs';
import { BiWorld } from 'react-icons/bi';
import { AiOutlineFileDone } from 'react-icons/ai';
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";
import logo8 from "../assets/logo8.png";
import logo9 from "../assets/logo9.png";
import logo10 from "../assets/logo10.png";
import logo11 from "../assets/logo11.png";
import logo12 from "../assets/logo12.png";
import { AiOutlineHome, AiOutlineLock, AiOutlineMail } from 'react-icons/ai';
import { TbWorld } from 'react-icons/tb';
import { CgNotes } from 'react-icons/cg';
import { RiMessage2Line } from 'react-icons/ri';
import { BsTelephone, BsWhatsapp } from 'react-icons/bs';
import logoCompany from "../assets/logo-horizontal.png";
import logoCompany2 from "../assets/logo.jpg";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

const ManagerContainer = () => {

    const [name, setName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [email, setEmail] = useState();
    const [position, setPosition] = useState();
    const [nameCompany, setNameCompany] = useState();
    const [scaleCompany, setScaleCompany] = useState();
    const [area, setArea] = useState();

    const handleClickForm = () => {
        if (!name || !phoneNumber || !email || !position || !nameCompany || !scaleCompany || !area) {
            toast.warning("Vui lòng nhập đầy đủ thông tin!", {
                position: toast.POSITION.TOP_CENTER
            })
        } else {
            toast.success("Thông tin đã được gửi!", {
                position: toast.POSITION.TOP_CENTER
            })
            setName('');
            setPhoneNumber('');
            setEmail('');
            setPosition('');
            setNameCompany('');
            setScaleCompany('');
            setArea('');
        }
    }

    return (
        <div className="manager-container">
            <div className="header-container">
                <div className='content-logo'><img src={logoCompany} alt="pic2" /></div>
                <div className='content-center'>
                    <div className="child-center">Về chúng tôi</div>
                    <div className="child-center">Dịch vụ</div>
                    <div className="child-center">Đối tác</div>
                    <div className="child-center">Liên hệ</div>
                </div>
                {/* <div className='content-button'>Mua ngay</div> */}
            </div>
            <div className='section-1'>
                <div className='title'>Chuyển đổi số doanh nghiệp 4.0</div>
                <div className='content-container'>
                    <div className='content-text'>
                        <div className='title-text'>Phần mềm quản lý doanh nghiệp gồm các chức năng:</div>
                        <div className='child-text'>
                            <span className='icon-text'><TbCheckbox /></span>
                            <div> Quản lý nhà hàng, Quản lý kho, Quản lý cửa hàng,<br /> Quản lý bán hàng, Quản lý khuyến mãi</div>
                        </div>
                        <div className='child-text'>
                            <span className='icon-text'><TbCheckbox /></span>
                            <div>Hệ thống thông tin nhân sự, Quản lý chấm công,<br /> Quản lý tiền lương, Quản lý nhân sự</div>
                        </div>
                        <div className='child-text'>
                            <span className='icon-text'><TbCheckbox /></span>
                            <div> Quản lý công việc, Quản lý tài liệu số của công ty,<br /> Quản lý tài sản, Quản lý phòng họp</div>
                        </div>
                        <div className='button-container'>
                            <div className='button-child'>Trải nghiệm <div className='icon-btn'><IoIosArrowForward /></div></div>
                            <div className='button-child'>Tư vấn<div className='icon-btn'><IoIosArrowForward /></div></div>
                        </div>
                    </div>
                    <img src={pic2} alt="pic2" />
                </div>
            </div>
            <div className='section-2'>
                <img src={pic3} alt="pic2" />
                <div className='content-text-2'>
                    <div className='child-content'>Phù hợp nhiều loại hình kinh doanh</div>
                    <div className='child-content'>Thị trường hoạt động của HTK ASIA là các doanh nghiệp tại nước ngoài như Đức, Tiệp, Úc, Nga, Anh, Mỹ, Nhật Bản, Hàn Quốc, Singapore và đặc biệt là các doanh nghiệp tại Việt Nam</div>
                    <div className='child-content'>Quản lí toàn diện các hoạt động doanh nghiệp của bạn trên một phần mềm</div>
                </div>
            </div>
            <div className='section-3' id='form'>
                <div className='title'>BÁO CÁO DOANH THU CHÍNH XÁC</div>
                <div className='content-container'>
                    <div className='content-left'>
                        <div className='title-content-left'>Đăng kí trải nghiệm và tư vấn miễn phí</div>
                        <input onChange={(e) => setName(e.target.value)} value={name} placeholder='Họ và tên' />
                        <input onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Số điện thoại' />
                        <input onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                        <input onChange={(e) => setPosition(e.target.value)} placeholder='Chức vụ' />
                        <input onChange={(e) => setNameCompany(e.target.value)} placeholder='Tên công ty' />
                        <input onChange={(e) => setScaleCompany(e.target.value)} placeholder='Quy mô doanh nghiệp' />
                        <input onChange={(e) => setArea(e.target.value)} placeholder='Khu vực' />
                        <button onClick={() => handleClickForm()}>Gửi</button>
                    </div>
                    <div className='content-right'>
                        <img src={pic4} alt="pic2" />
                        <div className='content-down'>GIẢM THIỂU CHI PHÍ VẬN HÀNH, TỐI ĐA HÓA LỢI NHUẬN CỦA DOANH NGHIỆP</div>
                        <div className='content-down'>
                            THÔNG KẾ DOANH THU THEO BIỂU ĐỒ GIÚP ĐÁNH GIÁ QUY MÔ, TỐC ĐỘ TĂNG TRƯỞNG CỦA DOANH NGHIỆP
                        </div>
                    </div>
                </div>
            </div>
            <div className='section-4'>
                <div className='title-1'>HTK - ASIA</div>
                <div className='title-2'>ĐƠN VỊ CHUYÊN THIẾT KẾ PHẦN MỀM QUẢN LÝ DOANH NGHIỆP</div>
                <div className='title-3'>ĐỒNG HÀNH CÙNG BẠN PHÁT TRIỂN DOANH NGHIỆP</div>
                <div className='content-container'>
                    <div className='content-left'>
                        <div className='child-content-left'><span className='icon-text'><FiCheckCircle /></span><div>Tên Phần mềm <span style={{ color: '#1e70b0' }}>đặt theo tên</span> Brand doanh nghiệp</div> </div>
                        <div className='child-content-left'><span className='icon-text'><FiCheckCircle /></span><div>Giao diện <span style={{ color: '#1e70b0' }}>thiết kế theo nhu cầu</span> của chủ doanh nghiệp</div></div>
                        <div className='child-content-left'><span className='icon-text'><FiCheckCircle /></span><div><span style={{ color: '#1e70b0' }}>Phù hợp nhiều mô hình kinh doanh</span> như nhà hàng, tiệm nail, kho hàng, nhà máy sản xuất...</div></div>
                        <div className='child-content-left'><span className='icon-text'><FiCheckCircle /></span><div>HTK ASIA mang cho bạn giải pháp quản lý doanh nghiệp <span style={{ color: '#1e70b0' }}>TỐI ƯU NHẤT, TIẾT KIỆM NHẤT</span></div></div>
                    </div>
                    <div className='content-right'>
                        <img src={pic5} alt="pic2" />
                        <div className='button-right'>TƯ VẤN NGAY <div className='icon-btn'><IoIosArrowForward /></div></div>
                    </div>
                </div>
            </div>
            <div className='section-5'>
                <div className='title'>Bạn là <span style={{ color: '#ff1616' }}>chủ doanh nghiệp</span> nhưng lại</div>
                <div className='content-container'>
                    <img src={pic6} alt="pic2" />
                    <div className='content-right'>
                        <div className='content-child-container'>
                            <div className='icon-content'><MdOutlineGames /></div>
                            <div className='text-content'>Mất quá <span style={{ color: '#ff1616' }}>nhiều thời gian</span> để quản lý kho hàng, hàng tồn kho suy đi tính lại vấn xảy ra tình trạng <span style={{ color: '#ff1616' }}>thiếu hụt hàng hóa</span></div>
                        </div>
                        <div className='content-child-container child-1'>
                            <div className='icon-content'><MdOutlineGames /></div>
                            <div className='text-content'>Sau một khoảng thời gian bán hàng, kinh doanh <span style={{ color: '#ff1616' }}>không biết lời, lãi bao nhiêu</span></div>
                        </div>
                        <div className='content-child-container child-2'>
                            <div className='icon-content'><MdOutlineGames /></div>
                            <div className='text-content'>Không quản lý được nhân viên, tổn nhiều <span style={{ color: '#ff1616' }}>thời gian</span> trong quá trình <span style={{ color: '#ff1616' }}>tính bảng lương</span> nhân viên</div>
                        </div>
                        <div className='content-child-container child-3'>
                            <div className='icon-content'><MdOutlineGames /></div>
                            <div className='text-content'>Giao diện của các phần mềm khác <span style={{ color: '#ff1616' }}>khó thao tác, sử dụng</span> không hỗ trợ <span style={{ color: '#ff1616' }}>nhiều loại ngôn ngữ ?</span></div>
                        </div>
                        <div className='content-child-container'>
                            <div className='icon-content'><MdOutlineGames /></div>
                            <div className='text-content'>Thanh toán, xuất hóa đơn <span style={{ color: '#ff1616' }}>chậm chạp</span> đôi lúc còn <span style={{ color: '#ff1616' }}>sai sót, tắc nghẽn giờ cao điểm</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section-6'>
                <div className='title-1'>CHUYÊN ĐỔI SỐ DOANH NGHIỆP, QUẢN LÝ TOÀN DIỆN TRÊN MỘT PHẦN MỀM DUY NHẤT</div>
                <div className='title-2'>Tiết kiệm thời gian, tối ưu hóa doanh thu, hoạt động doanh nghiệp của bạn</div>
                <div className='content-container'>
                    <div className='content'>
                        <div className='child-content'>
                            <div className='child-container left'>
                                <div className='child-title'>QUẢN LÝ BẰNG QR CODE</div>
                                <div className='child-text'>Quản lý kho, hàng tồn,... bằng mã vạch, chỉ 1 giây là có thể tìm kiếm được vị trí  sản phẩm, hàng hóa một cách dễ dàng</div>
                            </div>
                            <div className='child-icon'><BsQrCodeScan /></div>
                        </div>
                        <div className='child-content'>
                            <div className='child-container left'>
                                <div className='child-title'>HỖ TRỢ ĐA NỀN TẢNG</div>
                                <div className='child-text'>Phần mềm thiết kế, hỗ trợ đa nền tảng máy tính, máy tính bảng, điện thoại...</div>
                            </div>
                            <div className='child-icon'><FaLaptopCode /></div>
                        </div>

                        <div className='child-content'>
                            <div className='child-container left'>
                                <div className='child-title'>GIAO DIỆN THÔNG MINH</div>
                                <div className='child-text'>Tùy chỉnh, thiết kế giáo diện theo yêu cầu chủ doanh nghiệp, dễ dàng thao tác, sử dụng, hỗ trợ nhiều loại ngôn ngữ khác nhau</div>
                            </div>
                            <div className='child-icon'><MdTouchApp /></div>
                        </div>

                        <div className='child-content'>
                            <div className='child-container left'>
                                <div className='child-title'>CÔNG CỤ BÁN HÀNG</div>
                                <div className='child-text'>Công cụ xuất hóa đơn nhanh chóng bằng QR code chính xác trong giờ cao điểm</div>
                            </div>
                            <div className='child-icon'><MdPointOfSale /></div>
                        </div>
                    </div>
                    <img src={pic7} alt="pic2" />
                    <div className='content'>
                        <div className='child-content'>
                            <div className='child-icon'><AiFillCalculator /></div>
                            <div className='child-container'>
                                <div className='child-title'>TÍNH TOÁN TỰ ĐỘNG</div>
                                <div className='child-text'>Mọi chi phí từ bảng lương, chấm công, in hóa đơn thanh toán đều được tính toán tự động chính xác </div>
                            </div>
                        </div>
                        <div className='child-content'>
                            <div className='child-icon'><TbClockPlay /></div>
                            <div className='child-container'>
                                <div className='child-title'>TỐI ƯU THỜI GIAN</div>
                                <div className='child-text'>Tiết kiệm thời gian, tối ưu hóa hiệu quả làm việc của doanh nghiệp </div>
                            </div>
                        </div>
                        <div className='child-content'>
                            <div className='child-icon'><FaChartLine /> </div>
                            <div className='child-container '>
                                <div className='child-title'>BÁO CÁO DOANH THU</div>
                                <div className='child-text'>Báo cáo chi tiết doanh thu, lợi nhuận bằng đồ thị hình ảnh trực quan tránh sai sót trong quá trình quản lý doanh nghiệp</div>
                            </div>
                        </div>
                        <div className='child-content'>
                            <div className='child-icon'><IoIosPeople /></div>
                            <div className='child-container'>
                                <div className='child-title'>QUẢN LÝ NHÂN SỰ</div>
                                <div className='child-text'>Quản lý phòng ban, nhân viên được phân quyền truy cập hệ thống rõ ràng, phân chia công việc cụ thể</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='section-7'>
                <div className="child-achievement">
                    <span className="icon-child"><BsPersonPlus /></span>
                    <div className="number-child">100+</div>
                    <div className="title-child">Khách hàng <br />trung thành</div>
                </div>
                <div className="child-achievement">
                    <span className="icon-child">< BiWorld /></span>
                    <div className="number-child">30+</div>
                    <div className="title-child">Đối tác <br />Quốc tế</div>
                </div>
                <div className="child-achievement">
                    <span className="icon-child"><AiOutlineFileDone /></span>
                    <div className="number-child">200+</div>
                    <div className="title-child">Dự án<br /> hoàn thành</div>
                </div>
                <div className="child-achievement">
                    <span className="icon-child"><BsBoxes /></span>
                    <div className="number-child">35+</div>
                    <div className="title-child">Dự án đang<br /> thực hiện</div>
                </div>
            </div>
            <div className='section-8'>
                <div className='title'>CÁC DOANH NGHIỆP ĐÃ TIN TƯỞNG VÀ ĐỒNG HÀNH CÙNG HTK ASIA</div>
                <div className='logo-container'>
                    <img src={logo1} alt="pic2" />
                    <img src={logo2} alt="pic2" />
                    <img src={logo3} alt="pic2" />
                    <img src={logo4} alt="pic2" />
                    <img src={logo5} alt="pic2" />
                    <img src={logo6} alt="pic2" />
                    <img src={logo7} alt="pic2" />
                    <img src={logo8} alt="pic2" />
                    <img src={logo9} alt="pic2" />
                    <img src={logo10} alt="pic2" />
                    <img src={logo11} alt="pic2" />
                    <img src={logo12} alt="pic2" />
                </div>
            </div>
            <div className='section-9'>
                <div className='title-1'>Chọn gói phầm mềm quản lý phù hợp với doanh nghiệp của bạn</div>
                <div className='title-2'>Bảng giá</div>
                <div className='content-container'>
                    <Swiper
                        effect={"cards"}
                        grabCursor={true}
                        cardsEffect={
                            {
                                perSlideOffset: 50,
                                perSlideRotate: 0,
                                slideShadows: true,
                                rotate: true
                            }
                        }
                        centeredSlides={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="child-content-price">
                                <div className="title-child">Basic 1 tháng</div>
                                <div className="content-child">
                                    <li>Quản lý kho, hàng tồn bằng mã QR</li>
                                    <li>Xuất hóa đơn, in hóa đơn bằng mã QR </li>
                                    <li>Báo cáo doanh thu, lợi nhuận, tổn thất của doanh nghiệp theo Ngày/Tháng/Năm</li>
                                    <li>Quản lý nhân viên bao gồm: bảng chấm công, bảng lương nhân viên</li>
                                    <li>Không giới hạn người dùng</li>
                                </div>
                                <a href="/#form" alt="" className="contact-me">Liên hệ ngay <div className='icon-btn'><IoIosArrowForward /></div></a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="child-content-price">
                                <div className="title-child">Basic 1 năm</div>
                                <div className="content-child">
                                    <li>Quản lý kho, hàng tồn bằng mã QR</li>
                                    <li>Xuất hóa đơn, in hóa đơn bằng mã QR </li>
                                    <li>Báo cáo doanh thu, lợi nhuận, tổn thất của doanh nghiệp theo Ngày/Tháng/Năm</li>
                                    <li>Quản lý nhân viên bao gồm: bảng chấm công, bảng lương nhân viên</li>
                                    <li>Không giới hạn người dùng</li>
                                    <li>Tặng miễn phí 2 tháng</li>
                                </div>
                                <a href="/#form" alt="" className="contact-me">Liên hệ ngay <div className='icon-btn'><IoIosArrowForward /></div></a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="child-content-price child-price-discount">
                                <div className="title-child">Pro 1 tháng</div>
                                <div className="content-child">
                                    <li>Bao gồm các tính năng của gói BASIC</li>
                                    <li>Thiết kế, thêm tính năng ở giao diện theo yêu cầu chủ doanh nghiệp</li>
                                    <li>Đặt tên Phần mềm theo Brand của doanh nghiệp</li>
                                    <li>Không giới hạn người dùng</li>
                                </div>
                                <a href="/#form" alt="" className="contact-me">Liên hệ ngay <div className='icon-btn'><IoIosArrowForward /></div></a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="child-content-price child-price-discount">
                                <div className="title-child">Pro 1 năm</div>
                                <div className="content-child">
                                    <li>Bao gồm các tính năng của gói BASIC</li>
                                    <li>Thiết kế, thêm tính năng ở giao diện theo yêu cầu chủ doanh nghiệp</li>
                                    <li>Đặt tên Phần mềm theo Brand của doanh nghiệp</li>
                                    <li>Không giới hạn người dùng</li>
                                    <li>Tặng miễn phí 2 tháng</li>
                                </div>
                                <a href="/#form" alt="" className="contact-me">Liên hệ ngay <div className='icon-btn'><IoIosArrowForward /></div></a>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="section-10">
                <div className='wave'>
                </div>
                <div className='footer-container'>
                    <img src={logoCompany2} alt="pic2" />
                    <div className='footer-content'>
                        <div className="content-left-footer">
                            <div className="child-content-left">
                                <div className='icon-left'>
                                    <AiOutlineHome />
                                </div>
                                <span>
                                    <span style={{ fontWeight: 500 }}>Trụ sở:</span> 91 Nguyễn Chí Thanh, Đống Đa, Hà Nội
                                </span>
                            </div>
                            <div className="child-content-left">
                                <div className='icon-left'>
                                    <AiOutlineHome />
                                </div>
                                <span>
                                    <span style={{ fontWeight: 500 }}>Văn phòng Nga:</span> Mátxcơva, Quận thành phố Timiryazevsky Đại lộ Dmitrovsky 1, Văn phòng 418
                                </span>
                            </div>
                            <div className="child-content-left">
                                <div className='icon-left'>
                                    <AiOutlineMail />
                                </div>
                                <span>
                                    <span style={{ fontWeight: 500 }}>Email:</span> info@htk.asia
                                </span>
                            </div>
                            <div className="child-content-left">
                                <div className='icon-left'>
                                    <TbWorld />
                                </div>
                                <span>
                                    <span style={{ fontWeight: 500 }}>Website:</span> https://htk-asia.com
                                </span>
                            </div>
                            <div className="child-content-left">
                                <div className='icon-left'>
                                    <BsWhatsapp />
                                </div>
                                <span>
                                    <span style={{ fontWeight: 500 }}>Whatsapp:</span> +(84) 963 840 005
                                </span>
                            </div>
                            <div className="child-content-left">
                                <div className='icon-left'>
                                    <BsTelephone />
                                </div>
                                <span>
                                    <span style={{ fontWeight: 500 }}>Điện thoại(Vi):</span> +(84) 963 840 005
                                </span>
                            </div>
                            <div className="child-content-left">
                                <div className='icon-left'>
                                    <BsTelephone />
                                </div>
                                <span>
                                    <span style={{ fontWeight: 500 }}>Điện thoại(Nga):</span> +7 977 800 32-99
                                </span>
                            </div>
                        </div>
                        <div className="content-right-footer">
                            <div className="child-content-title">About us</div>
                            <div className="child-content-right">
                                <div className='icon-left'>
                                    <AiOutlineLock />
                                </div>
                                <span>
                                    Chính sách bảo mật
                                </span>
                            </div>
                            <div className="child-content-right">
                                <div className='icon-left'>
                                    <CgNotes />
                                </div>
                                <span>
                                    Điều khoản sử dụng
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='copy-right'>HTK ASIA &copy; 2020 All Rights Reserved </div>
            </div>
            <ToastContainer />
        </div >
    )
}

export default ManagerContainer;