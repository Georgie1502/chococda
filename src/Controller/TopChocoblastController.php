<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class TopChocoblastController extends AbstractController
{
    #[Route('/top/chocoblast', name: 'app_top_chocoblast')]
    public function Top(): Response
    {
        return $this->render('top_chocoblast/index.html.twig', [
            'controller_name' => 'TopChocoblastController',
        ]);
    }
}
