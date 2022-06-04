import {Header} from "../components/Header";
import {Carousel, Layout, Typography} from "antd";
import {SearchForm} from "../components/SearchForm";
import Gallery from 'react-photo-gallery';
import {MainSlide} from "../components/MainSlide";
import {AppLayout} from "../layouts/AppLayout";

const PHOTO_SET = [
  {
    src: 'https://www.oberlin.edu/sites/default/files/styles/width_760/public/content/news/images-2020/apartment_therapy_dorm_design.jpg?itok=JaodrbeA',
    width: 4,
    height: 3
  },
  {
    src: 'https://www.designideasguide.com/wp-content/uploads/2021/03/Dorm-Room-Ideas.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'https://styleblueprint.com/wp-content/uploads/2020/05/SB-SE-Over-the-Top-SEC-dorm-rooms-LeighDeux-Capture2675.jpeg',
    width: 2,
    height: 1
  },
  {
    src: 'https://www.mymove.com/wp-content/uploads/2020/06/svetikd_Getty-scaled.jpg',
    width: 2,
    height: 1
  },
  {
    src: 'https://www.designscene.net/wp-content/uploads/2021/02/dorm-room-01.jpg',
    width: 1,
    height: 1
  }
];

export function Index() {
  return (
    <AppLayout>
      <MainSlide/>
      <SearchForm/>
      <div className={"main-content"}>
        <div className={"d-flex justify-space-between"}>
          <h3>Hình ảnh</h3>
          <a href={"/gallery"}>
            <Typography.Text underline>
              Xem tất cả
            </Typography.Text>
          </a>
        </div>

        <div style={{margin: '0 -8px'}} className={"gallery-images"}>
          <Gallery photos={PHOTO_SET} margin={8} />
        </div>

      </div>
    </AppLayout>
  );
}

export default Index;
