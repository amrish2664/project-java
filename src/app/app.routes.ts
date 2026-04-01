import { Routes } from '@angular/router';
import { Content } from './pages/content/content';
import { Quiz } from './pages/quiz/quiz';


export const routes: Routes = [
    {
        path:'',
        redirectTo:'topic/intro',
        pathMatch:'full'
    },
    {
        path:'topic/:id',
        component:Content
    },
    {
        path:'quiz/:id',
        component:Quiz
    },
    {
        path:'**',
        redirectTo:'topic/intro'
    }
];
