import CardCarousel1 from "../images/card-carousel-audience/card-carousel1.png";
import CardCarousel2 from "../images/card-carousel-audience/card-carousel2.png";
import CardCarousel3 from "../images/card-carousel-audience/card-carousel3.png";
import CardInfo1_375 from "../images/card-info-audience/card-info1_375.svg";
import CardInfo2_375 from "../images/card-info-audience/card-info2_375.svg";
import CardInfo3_375 from "../images/card-info-audience/card-info3_375.svg";
import CardInfo1_768 from "../images/card-info-audience/card-info1_768.png";
import CardInfo2_768 from "../images/card-info-audience/card-info2_768.png";
import CardInfo3_768 from "../images/card-info-audience/card-info3_768.png";

export const PATH_HOME = "/";
export const PATH_CYBERGID = "https://kibergid.ru/";
export const PATH_TG_BOLDAREV = "https://t.me/boldarevyury";
export const PATH_LINK_ABOUT = "#about";
export const PATH_LINK_AUDIENCE = "#audience";
export const PATH_LINK_TRY_IT = "#try_it";

export const TYPE_HEADER = "header";
export const TYPE_FOOTER = "footer";

export const TYPE_BTN_HEADER = "header";
export const TYPE_BTN_TRY_IT_BANNER = "try_it_banner";
export const TYPE_BTN_TRY_IT_HIDDEN = "try_it_hidden";

export const TEXT_BTN_TRY_IT = "Попробовать";
export const TEXT_BTN_CONTACT = "Связаться с нами";

export const TEXT_BRAND_NAME_RU = "КиберГид";
export const TEXT_BRAND_NAME_ENG = "CyberGuide";

export const TEXT_MENU_ABOUT = "О нас";
export const TEXT_MENU_AUDIENCE = "Для кого этот продукт?";
export const TEXT_MENU_CONTACT = "Контакты";

export const TEXT_LINK_FOOTER =
  "Подробнее узнать о проекте и задать вопросы вы можете  в Telegram ";

export const TEXT_BANNER_TITLE =
  "Прогулки могут быть интересными вместе с КиберГид";
export const TEXT_BANNER_SUBTITLE =
  "Приложение для людей, которые любят гулять и зарабатывают на своих маршрутах.";
export const TEXT_ABOUT_TITLE = "В любом городе можно гулять по-разному:";
export const TEXT_ABOUT_SUBTITLE = [
  "как турист, поставивший себе цель за один день познакомиться с достопримечательностями;",
  "как житель, решивший сделать сегодня свои 10 тысяч шагов по новым местам;",
  "слушать историю, медитацию или аудиоурок;",
  "в поиске самых фотогеничных мест;",
  "охотиться на тот самый десерт или составить шоппинг-маршрут;",
  "с детьми, друзьями или в одиночку;",
  "пешком, на великах или авто.",
];
export const TEXT_AUDIENCE_TITLE = "Для кого наш продукт?";
export const TEXT_TRY_IT_TITLE =
  "Используй наше веб-приложение уже сейчас и становись частью коммьюнити КиберГид.";
export const TEXT_TRY_IT_SUBTITLE =
  "Приложение бесплатное. Отсканируй указанный ниже QR-code на своем смартфоне и ты попадешь на главную страницу приложения.";
export const CARD_CAROUSEL_AUDIENCE = [
  {
    id: 1,
    img: CardCarousel1,
    altImg: "Изображение мужчины, гуляющего по городу",
    text: "Люди, которые любят гулять, узнавать новое и делятся своими открытиями с другими.",
  },
  {
    id: 2,
    img: CardCarousel2,
    altImg: "Изображение девушки-блоггера",
    text: "Гиды, экскурсоводы и блоггеры, которые зарабатывают на своем опыте, знаниях и историях.",
  },
  {
    id: 3,
    img: CardCarousel3,
    altImg: "Изображение девушки в кафе",
    text: "Владельцы малого и среднего бизнеса, которые хотят привлечь к себе аудиторию новым способом.",
  },
];
export const TYPE_AUDIENCE_INFO_TYPE_RIGHT = "right_side";
export const TYPE_AUDIENCE_INFO_TYPE_LEFT = "left_side";
export const CARD_INFO_AUDIENCE = [
  {
    id: 1,
    type: TYPE_AUDIENCE_INFO_TYPE_LEFT,
    title: "Любишь гулять по городу?",
    imgSmall: CardInfo1_375,
    imgBig: CardInfo1_768,
    altImg: "Изображение маршрута на карте города",
    array_text: [
      {
        id: 1,
        text: "Находи маршрут, который тебе интересен и проходи его в своем темпе.",
        array_text_second: "",
      },
      {
        id: 2,
        text: "Планируй прогулки в разных городах, делись своими впечатлениями с друзьями.",
        array_text_second: "",
      },
      {
        id: 3,
        text: "Подписывайся на понравившихся авторов, чтобы не пропустить новые прогулки.",
        array_text_second: "",
      },
      {
        id: 4,
        text: "Создавай свои маршруты и зарабатывай вместе с КиберГид.",
        array_text_second: "",
      },
    ],
  },
  {
    id: 2,
    type: TYPE_AUDIENCE_INFO_TYPE_RIGHT,
    title: "Хочешь стать автором своих прогулок?",
    imgSmall: CardInfo2_375,
    imgBig: CardInfo2_768,
    altImg: "Изображение карточки автора маршрута",
    array_text: [
      {
        id: 1,
        text: "Создавай маршруты с твоим уникальным стилем.",
        array_text_second: "",
      },
      {
        id: 2,
        text: "Рассказывай истории, делись подборками заведений, записывай аудиоуроки, прокладывай путь для себя - прогулка   может быть разной!",
        array_text_second: "",
      },
      {
        id: 3,
        text: "Получай ежемесячный доход с продажи своих маршрутов.",
        array_text_second: "",
      },
      {
        id: 4,
        text: "Становись популярным, собирая подписчиков, и монетизируй свой КиберБлог.",
        array_text_second: "",
      },
    ],
  },
  {
    id: 3,
    type: TYPE_AUDIENCE_INFO_TYPE_LEFT,
    title: "Хочешь использовать КиберГид на пользу бизнесу?",
    imgSmall: CardInfo3_375,
    imgBig: CardInfo3_768,
    altImg: "Изображение настройки маршрута в приложении",
    array_text: [
      {
        id: 1,
        text: "Создавай авторские маршруты для привлечения новых клиентов:",
        array_text_second: [
          "аудиогиды для HoReCa;",
          "подборка заведений и магазинов от блоггеров;",
          "вирусные маршруты для создания ажиотажа, маршруты под фестивали и мероприятия.",
        ],
      },
      {
        id: 2,
        text: "Формируй активности для своих клиентов:",
        array_text_second: [
          "закрытые маршруты для сотрудников компаний;",
          "секретные маршруты для постоянных клиентов;",
          "прогулки-флешмобы по всей стране, квесты и иммерсивы.",
        ],
      },
    ],
  },
];
