import { LibraryPage } from './../library/library';
import { FavoritesPage } from './../favorites/favorites';
import { Component } from '@angular/core';

@Component({
    selector: 'page-tabs',
    template: `
    <ion-tabs>
        <ion-tab [root]="favoritesPage" tabTitle="Favorites" tabIcon="star"></ion-tab>
        <ion-tab [root]="libraryPage" tabTitle="Library" tabIcon="book"></ion-tab>
    </ion-tabs> 
    `,
})
export class TabsPage {
    favoritesPage = FavoritesPage;
    libraryPage = LibraryPage;
}

//Tạo Tab cho các thành phần trong mobile sử dụng ion tabs
//Để mặc định khi load lên phần mềm sẽ chọn tab nào thì sẽ sử dụng selectedIndex ở ion-tabs
//vd: <ion-tabs selectedIndex="0">