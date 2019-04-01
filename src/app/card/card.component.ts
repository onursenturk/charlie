import { Component, OnInit } from '@angular/core';

interface ICard {
	title? :string;
	subtitle?: string;
	content?: string;
	imageUrl?: string;
	avatarUrl?: string;
	buttons?: string[];
	icons?: string[];
}

class Card {
	public title: string;
	public subtitle: string;
	public content: string;
	public imageUrl: string;
	public avatarUrl: string;
	public buttons: string[];
	public icons: string[];

	constructor(obj?:ICard) {

		this.title = obj.title || "Card title";
		this.subtitle = obj.subtitle || "Card subtitle";
		this.content = obj.content;
		this.imageUrl = obj.imageUrl;
		this.avatarUrl = obj.avatarUrl;
		this.buttons = obj.buttons;
		this.icons = obj.icons;

	}
}

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

	public cards: Card[];

	constructor() { }

	ngOnInit() {
		this.cards = [
		new Card({
			content: `New York City comprises 5 boroughs sitting where the
			Hudson River meets the Atlantic Ocean. At its core is Manhattan,
			a densely populated borough that’s among the world’s major commercial,
			financial and cultural centers.`,
			icons: ["favorite", "bookmark", "share"],
			imageUrl: "https://www.infragistics.com/angular-demos/assets/images/card/media/ny.jpg",
			subtitle: "City in New York",
			title: "New York City"
		}),
		new Card({
			content: `Ankara comprises 5 boroughs sitting where the
			Hudson River meets the Atlantic Ocean. At its core is Manhattan,
			a densely populated borough that’s among the world’s major commercial,
			financial and cultural centers.`,
			icons: ["favorite", "bookmark", "share"],
			imageUrl: "https://www.infragistics.com/angular-demos/assets/images/card/media/ny.jpg",
			subtitle: "Ankara",
			title: "ankara",
			buttons: ["..."]
		})

		];
	}

}
