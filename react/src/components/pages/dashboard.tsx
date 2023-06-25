import { useDashboard } from "../../hooks/useDashboard"
import { HeaderTemplate } from "../templates/header"
import { Headings } from "../templates/headings"
import MainMobile from "../templates/mainMobile"
import { OrderChat } from "../templates/orderchat"
import { OrdersMobile } from "../templates/ordersMobile"
import { PurchaseModal } from "../templates/purchaseModal"
import { PurchaseSection } from "../templates/purchaseSection"

export const Dashboard = () => {
  useDashboard()
  return (
    <section className="body">
        <HeaderTemplate/>
        <Headings/>
        <MainMobile/>
        <OrderChat/>
        <PurchaseSection/>
        <OrdersMobile/>
        <PurchaseModal/>
        <footer>Copyright Olumuyiwa Aro</footer>
    </section>
  )
}
