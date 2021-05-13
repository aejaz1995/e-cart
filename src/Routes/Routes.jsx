import React from 'react'
import {Route, Switch} from "react-router-dom"
import { AccessoriesPage } from '../Pages/AccessoriesPage'
import { CartPage } from '../Pages/CartPage'
import { FashionPage } from '../Pages/FashionPage'
import {HomePage} from "../Pages/HomePage"
import { LaptopPage } from '../Pages/LaptopPage'
import { LoginPage } from '../Pages/LoginPage'
import { MenPage } from '../Pages/MenPage'
import { MobilePage } from '../Pages/MobilePage'
import { WomenPage } from '../Pages/WomenPage'
const Routes = () => {
    return (
        <div>
            <Switch>

                <Route exact path="/">
                        <HomePage />
                </Route>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/fashion/men">
                    <MenPage />
                </Route>
                <Route exact path="/fashion" component={FashionPage}/>
                <Route exact path="/fashion/women" component={WomenPage} />
                <Route exact path="/electronics/mobile" component={MobilePage}/>
                <Route exact path="/electronics/laptop" component={LaptopPage}/>
                <Route exact path="/electronics/accessories" component={AccessoriesPage}/>
                <Route exact path="/cart" component={CartPage}/>
                <Route>
                    <h1>Eroror: Page not found </h1>
                </Route>
            </Switch>
            
        </div>
    )
}

export {Routes}
