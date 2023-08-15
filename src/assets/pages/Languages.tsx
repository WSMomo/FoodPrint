import Italian from "../../../public/img/languages/italy.png";
import English from "../../../public/img/languages/english.png";
import { useDispatch } from "react-redux";
import { setLanguage } from "../redux/quizReducer";
import i18n from "../../i18n";

export default function Languages() {
  const dispatch = useDispatch();

  function handleLanguageChange(language: string) {
    i18n.changeLanguage(language);
    dispatch(setLanguage(language));
  }

  return (
    <div className="flex flex-col gap-12 w-1/6 md:w-1/3 md:flex-row xl:w-1/6 justify-center items-center">
      <div
        className="cursor-pointer"
        onClick={() => handleLanguageChange("en")}
      >
        <img src={English} alt="English" />
      </div>
      <div
        className="cursor-pointer"
        onClick={() => handleLanguageChange("it")}
      >
        <img src={Italian} alt="Italian" />
      </div>
    </div>
  );
}
