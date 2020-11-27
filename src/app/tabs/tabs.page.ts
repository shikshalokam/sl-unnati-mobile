import { Component } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  private activeTab?: HTMLElement;

  tabs = [
    {
      icon: "reader",
      name: "LABELS.PROJECTS",
      path: "projects",
      showlabel: true,
    },
    {
      icon: "business",
      name: "LABELS.INSTITUTIONS",
      path: "institutions",
      showlabel: true,
    },
    {
      icon: "home",
      name: "LABELS.HOME",
      path: "home",
      showlabel: false,
      class: 'activeHome',
      isCentered: true
    },
    {
      icon: "stats-chart",
      name: "LABELS.REPORTS",
      path: "reports",
      showlabel: true,
    },
    {
      icon: "newspaper",
      name: "LABELS.NEWSFEED",
      path: "newsfeed",
      showlabel: true,
    },
  ]

  constructor() {
  }

  tabChange(tabsRef: IonTabs) {
    this.activeTab = tabsRef.outlet.activatedView.element;
  }

  ionViewWillLeave() {
    this.propagateToActiveTab('ionViewWillLeave');
  }

  ionViewDidLeave() {
    this.propagateToActiveTab('ionViewDidLeave');
  }

  ionViewWillEnter() {
    this.propagateToActiveTab('ionViewWillEnter');
  }

  ionViewDidEnter() {
    this.propagateToActiveTab('ionViewDidEnter');
  }

  private propagateToActiveTab(eventName: string) {
    if (this.activeTab) {
      this.activeTab.dispatchEvent(new CustomEvent(eventName));
    }
  }
}
