import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async ({ locale }:any) => {
    return {
      props: {
        ...(await serverSideTranslations(locale!, [
          'common'
        ])),
        // Will be passed to the page component as props
      },
    }
  }