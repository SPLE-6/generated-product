import { useRoutes } from "react-router";
import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import profileRoutes from "@/profile/routes";
import sewaKostRoutes from "@/sewaKost/routes";
import katalogKostRoutes from "@/katalogKost/routes";
import riwayatRoutes from "@/riwayat/routes";
import myPropertiRoutes from "@/myProperti/routes";
import paymentKreditRoutes from "@/paymentKredit/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
	...commonRoutes,
	...staticPageRoutes,
	...userRoutes,
	...roleRoutes,
	...homeRoutes, 
	...profileRoutes, 
	...sewaKostRoutes, 
	...katalogKostRoutes, 
	...riwayatRoutes, 
	...myPropertiRoutes, 
	...paymentKreditRoutes, 
  ])
  return router
}

const MobileRoutes = () => {
	const router = useRoutes([ 
	  ...commonMobileRoutes, 
  ])
  return router
}

export {GlobalRoutes, MobileRoutes}
