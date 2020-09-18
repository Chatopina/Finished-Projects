//
//  ViewController.swift
//  MusicPlayer
//
//  Created by Luis Pina on 6/2/19.
//  Copyright © 2019 Luis Pina. All rights reserved.
//

import UIKit
import MediaPlayer

class ViewController: UIViewController {
    var MusicPlayer = MPMusicPlayerController.applicationMusicPlayer

    override func viewDidLoad() {
        super.viewDidLoad()

    }
    @IBAction func Music(_ sender: UIButton) {
        MPMediaLibrary.requestAuthorization{
            (status) in
            self.musicG(genre: sender.currentTitle!)

                if status == .authorized {
            };    }
    
    }
    @IBAction func Next(_ sender: UIButton) {
        MusicPlayer.skipToNextItem()
    }
    
    @IBAction func Stop(_ sender: UIButton) {
        MusicPlayer.stop()
    }
    
    func musicG(genre: String) {
    MusicPlayer.stop()
        
        let query = MPMediaQuery()
        let predicat = MPMediaPropertyPredicate (value: genre, forProperty: MPMediaItemPropertyGenre)
        
        query.addFilterPredicate(predicat)
        
        MusicPlayer.setQueue(with: query)
        MusicPlayer.shuffleMode = .songs
        MusicPlayer.play()
    }
}
