import React from "react";
interface Props {
  loginCloser: Function;
}
export default function Login({ loginCloser }: Props) {
  return (
    <div>
      <div data-v-228ccc36="" className="background"></div>
      <div data-v-228ccc36="" className="content-wrapper">
        <div data-v-228ccc36="" className="content-centered">
          <div data-v-228ccc36="" className="content slideUp">
            <div data-v-228ccc36="" className="header-content">
              <div data-v-228ccc36="" className="line"></div>
              <svg
                onClick={() => loginCloser()}
                data-v-228ccc36=""
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-test-id="button__close-popup"
                className="ui-icon close"
              >
                <rect width="24" height="24" rx="12" fill="#DFE0E2"></rect>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.28033 7.21967C7.98744 6.92678 7.51256 6.92678 7.21967 7.21967C6.92678 7.51256 6.92678 7.98744 7.21967 8.28033L10.9393 12L7.21967 15.7197C6.92678 16.0126 6.92678 16.4874 7.21967 16.7803C7.51256 17.0732 7.98744 17.0732 8.28033 16.7803L12 13.0607L15.7197 16.7803C16.0126 17.0732 16.4874 17.0732 16.7803 16.7803C17.0732 16.4874 17.0732 16.0126 16.7803 15.7197L13.0607 12L16.7803 8.28033C17.0732 7.98744 17.0732 7.51256 16.7803 7.21967C16.4874 6.92678 16.0126 6.92678 15.7197 7.21967L12 10.9393L8.28033 7.21967Z"
                  fill="#4E5155"
                ></path>
              </svg>
            </div>
            <div
              data-v-4d0abd4e=""
              data-v-5fe0dbd7=""
              className="new-sign-in component"
              data-v-228ccc36=""
            >
              <header data-v-4d0abd4e="" className="header">
                <div data-v-4d0abd4e="" className="popup-title">
                  Kirish
                </div>
              </header>
              <div data-v-4d0abd4e="" className="sign-in-wrapper">
                <div
                  data-v-ab6ff962=""
                  data-v-4d0abd4e=""
                  className="sign-in-phone"
                >
                  <form data-v-ab6ff962="" ui-form="" className="form">
                    <div data-v-ab6ff962="" className="title">
                      Telefon raqamini kiriting
                    </div>
                    <div data-v-ab6ff962="" className="description">
                      Tasdiqlash kodini SMS orqali yuboramiz
                    </div>
                    <div
                      data-v-ab6ff962=""
                      className="ui-component ui-input"
                      placeholder="00 000-00-00"
                    >
                      <div className="slot before">+998</div>
                      <input
                        maxLength={7}
                        placeholder="00 000-00-00"
                        className="no-after"
                      />
                    </div>
                    <button
                      data-v-57aaf377=""
                      data-v-ab6ff962=""
                      className="ui-component ui-button button primary-violet medium"
                    >
                      <div data-v-57aaf377="" className="slot default">
                        Kodni olish
                      </div>
                    </button>
                  </form>
                  <div data-v-ab6ff962="" className="bottom">
                    <div data-v-ab6ff962="" className="by-password">
                      Parol bilan kirish
                    </div>
                    <div data-v-ab6ff962="" className="policy">
                      Avtotizatsiyadan o'tish orqali siz
                      <a
                        data-v-ab6ff962=""
                        href="https://legal.uzum.uz/privacy-policy.html"
                        target="_blank"
                      >
                        {" "}
                        shaxsiy ma'lumotlarni qayta ishlash siyosatiga rozilik
                        bildirasiz
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
