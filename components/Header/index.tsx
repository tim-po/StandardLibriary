import React, {useEffect, useState} from "react";
import ConnectModal from "../ConnectModal";
import {useWeb3React} from "@web3-react/core";
import './index.css'
// @ts-ignore
import {HidingText} from "../HidingText";
import logo from '../../images/MMProLogo.svg'
import logoSmall from '../../images/MMProLogoSmall.svg'
import arrowUp from '../../images/arrowUpWhite.svg'
import {LocaleSelector} from "../LocaleSelector";
import MetamaskJazzicon from "../MetamaskJazzicon";
import {Link} from "react-router-dom";
import WalletConnector from "../WalletConnector";

const HeaderDefaultProps = {
  logoHref: 'https://marketmaking.pro/'
}

const Header = (props: {logoHref?: string, hideWalletConnector?: boolean, displayNotification: ()=>void, locales: string[], pages?: {title: string, url: string}[]}) => {
  const {locales, pages, displayNotification, logoHref, hideWalletConnector} = props
  const [selectedPage, setSelectedPage] = useState(pages ? pages[0].url: '')

  useEffect(()=>{
    setSelectedPage(window.location.pathname)
  }, [])

  return (
    <>
      <header className="px-4 mx-auto py-4" style={{minWidth: 340, zIndex: 5}}>
        <div className="flex flex-row justify-between items-center w-full">
          <div className={'logo-and-tabs'}>
            <a href={logoHref}>
              <img
                src={logo}
                width="180"
                className="cursor-pointer logo-large"
                alt="mmpro logo"
              />
              <img
                src={logoSmall}
                width="180"
                className="cursor-pointer logo-small"
                alt="mmpro logo"
              />
            </a>
            <div className={'separator'}/>
            <div className={'tabs'}>
            {(pages !== undefined && pages.length > 0) &&
                <>
                  {pages.map(page => (
                    <Link
                        className={`page-tab ${selectedPage === page.url && 'tab-selected'}`}
                        onClick={()=>{
                          setSelectedPage(page.url)
                        }}
                        to={page.url}
                    >
                      {page.title}
                      <div className={'tab-selector'}/>
                    </Link>
                  ))}
                </>
            }
            </div>
          </div>

          <div className={'control-strip'}>
            {locales.length > 1 &&
                <LocaleSelector locales={locales}/>
            }
            {!hideWalletConnector &&
              <WalletConnector displayNotification={displayNotification}/>
            }
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = HeaderDefaultProps

export default Header