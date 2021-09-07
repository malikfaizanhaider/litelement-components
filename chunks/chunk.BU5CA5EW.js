import {
  focusVisible
} from "./chunk.XAZSQ3AT.js";
import {
  getOffset,
  scrollIntoView
} from "./chunk.MMQCDOAH.js";
import {
  watch
} from "./chunk.BD26TKS4.js";
import {
  emit
} from "./chunk.I4TE3TJV.js";
import {
  e as e2
} from "./chunk.YXKHB4AC.js";
import {
  T,
  e,
  h,
  n,
  o,
  r,
  r2
} from "./chunk.5PIDMFOE.js";
import {
  __decorateClass
} from "./chunk.IHGPZX35.js";

// _vgtx8nf3g:D:\DSM-V2\src\components\tab-group\tab-group.scss
var tab_group_default = ":host {\n  position: relative;\n  box-sizing: border-box;\n}\n:host *, :host *:before, :host *:after {\n  box-sizing: inherit;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n:host {\n  --tabs-border-color: var(--i2c-color-gray-200);\n  display: block;\n}\n\n.tab-group {\n  display: flex;\n  border: solid 1px transparent;\n  border-radius: 0;\n}\n.tab-group .tab-group__tabs {\n  display: flex;\n  position: relative;\n}\n.tab-group .tab-group__indicator {\n  position: absolute;\n  left: 0;\n  transition: var(--i2c-transition-fast) transform ease, var(--i2c-transition-fast) width ease;\n}\n.tab-group:not(.focus-visible) ::slotted(i2c-tab) {\n  --focus-ring: none;\n}\n\n.tab-group--has-scroll-controls .tab-group__nav-container {\n  position: relative;\n  padding: 0 var(--i2c-spacing-x-large);\n}\n\n.tab-group__scroll-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: var(--i2c-spacing-x-large);\n}\n\n.tab-group__scroll-button--start {\n  left: 0;\n}\n\n.tab-group__scroll-button--end {\n  right: 0;\n}\n\n.tab-group--top {\n  flex-direction: column;\n}\n.tab-group--top .tab-group__nav-container {\n  order: 1;\n}\n.tab-group--top .tab-group__nav {\n  display: flex;\n  overflow-x: auto;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.tab-group--top .tab-group__nav::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n.tab-group--top .tab-group__tabs {\n  flex: 1 1 auto;\n  position: relative;\n  flex-direction: row;\n  border-bottom: solid 2px var(--tabs-border-color);\n}\n.tab-group--top .tab-group__indicator {\n  bottom: -2px;\n  border-bottom: solid 2px var(--i2c-color-primary-500);\n}\n.tab-group--top .tab-group__body {\n  order: 2;\n}\n\n.tab-group--bottom {\n  flex-direction: column;\n}\n.tab-group--bottom .tab-group__nav-container {\n  order: 2;\n}\n.tab-group--bottom .tab-group__nav {\n  display: flex;\n  overflow-x: auto;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.tab-group--bottom .tab-group__nav::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n.tab-group--bottom .tab-group__tabs {\n  flex: 1 1 auto;\n  position: relative;\n  flex-direction: row;\n  border-top: solid 2px var(--tabs-border-color);\n}\n.tab-group--bottom .tab-group__indicator {\n  top: calc(-1 * 2px);\n  border-top: solid 2px var(--i2c-color-primary-500);\n}\n.tab-group--bottom .tab-group__body {\n  order: 1;\n}\n\n.tab-group--start {\n  flex-direction: row;\n}\n.tab-group--start .tab-group__nav-container {\n  order: 1;\n}\n.tab-group--start .tab-group__tabs {\n  flex: 0 0 auto;\n  flex-direction: column;\n  border-right: solid 2px var(--tabs-border-color);\n}\n.tab-group--start .tab-group__indicator {\n  right: calc(-1 * 2px);\n  border-right: solid 2px var(--i2c-color-primary-500);\n}\n.tab-group--start .tab-group__body {\n  flex: 1 1 auto;\n  order: 2;\n}\n\n.tab-group--end {\n  flex-direction: row;\n}\n.tab-group--end .tab-group__nav-container {\n  order: 2;\n}\n.tab-group--end .tab-group__tabs {\n  flex: 0 0 auto;\n  flex-direction: column;\n  border-left: solid 2px var(--tabs-border-color);\n}\n.tab-group--end .tab-group__indicator {\n  left: calc(-1 * 2px);\n  border-left: solid 2px var(--i2c-color-primary-500);\n}\n.tab-group--end .tab-group__body {\n  flex: 1 1 auto;\n  order: 1;\n}";

// src/components/tab-group/tab-group.ts
var I2CTabGroup = class extends h {
  constructor() {
    super(...arguments);
    this.tabs = [];
    this.panels = [];
    this.hasScrollControls = false;
    this.placement = "top";
    this.activation = "auto";
    this.noScrollControls = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver = new ResizeObserver(() => {
      this.preventIndicatorTransition();
      this.repositionIndicator();
      this.updateScrollControls();
    });
    this.mutationObserver = new MutationObserver((mutations) => {
      if (mutations.some((m) => !["aria-labelledby", "aria-controls"].includes(m.attributeName))) {
        setTimeout(() => this.setAriaLabels());
      }
      if (mutations.some((m) => m.attributeName === "disabled")) {
        this.syncTabsAndPanels();
      }
    });
    this.updateComplete.then(() => {
      this.syncTabsAndPanels();
      this.mutationObserver.observe(this, { attributes: true, childList: true, subtree: true });
      this.resizeObserver.observe(this.nav);
      focusVisible.observe(this.tabGroup);
      const intersectionObserver = new IntersectionObserver((entries, observer) => {
        if (entries[0].intersectionRatio > 0) {
          this.setAriaLabels();
          this.setActiveTab(this.getActiveTab() || this.tabs[0], { emitEvents: false });
          observer.unobserve(entries[0].target);
        }
      });
      intersectionObserver.observe(this.tabGroup);
    });
  }
  disconnectedCallback() {
    this.mutationObserver.disconnect();
    this.resizeObserver.unobserve(this.nav);
    focusVisible.unobserve(this.tabGroup);
  }
  show(panel) {
    const tab = this.tabs.find((el) => el.panel === panel);
    if (tab) {
      this.setActiveTab(tab, { scrollBehavior: "smooth" });
    }
  }
  getAllTabs(includeDisabled = false) {
    const slot = this.shadowRoot.querySelector('slot[name="nav"]');
    return [...slot.assignedElements()].filter((el) => {
      return includeDisabled ? el.tagName.toLowerCase() === "i2c-tab" : el.tagName.toLowerCase() === "i2c-tab" && !el.disabled;
    });
  }
  getAllPanels() {
    const slot = this.body.querySelector("slot");
    return [...slot.assignedElements()].filter((el) => el.tagName.toLowerCase() === "i2c-tab-panel");
  }
  getActiveTab() {
    return this.tabs.find((el) => el.active);
  }
  handleClick(event) {
    const target = event.target;
    const tab = target.closest("i2c-tab");
    const tabGroup = tab == null ? void 0 : tab.closest("i2c-tab-group");
    if (tabGroup !== this) {
      return;
    }
    if (tab) {
      this.setActiveTab(tab, { scrollBehavior: "smooth" });
    }
  }
  handleKeyDown(event) {
    const target = event.target;
    const tab = target.closest("i2c-tab");
    const tabGroup = tab == null ? void 0 : tab.closest("i2c-tab-group");
    if (tabGroup !== this) {
      return;
    }
    if (["Enter", " "].includes(event.key)) {
      if (tab) {
        this.setActiveTab(tab, { scrollBehavior: "smooth" });
        event.preventDefault();
      }
    }
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) {
      const activeEl = document.activeElement;
      if (activeEl && activeEl.tagName.toLowerCase() === "i2c-tab") {
        let index = this.tabs.indexOf(activeEl);
        if (event.key === "Home") {
          index = 0;
        } else if (event.key === "End") {
          index = this.tabs.length - 1;
        } else if (event.key === "ArrowLeft") {
          index = Math.max(0, index - 1);
        } else if (event.key === "ArrowRight") {
          index = Math.min(this.tabs.length - 1, index + 1);
        }
        this.tabs[index].focus({ preventScroll: true });
        if (this.activation === "auto") {
          this.setActiveTab(this.tabs[index], { scrollBehavior: "smooth" });
        }
        if (["top", "bottom"].includes(this.placement)) {
          scrollIntoView(this.tabs[index], this.nav, "horizontal");
        }
        event.preventDefault();
      }
    }
  }
  handleScrollToStart() {
    this.nav.scroll({
      left: this.nav.scrollLeft - this.nav.clientWidth,
      behavior: "smooth"
    });
  }
  handleScrollToEnd() {
    this.nav.scroll({
      left: this.nav.scrollLeft + this.nav.clientWidth,
      behavior: "smooth"
    });
  }
  updateScrollControls() {
    if (this.nav) {
      if (this.noScrollControls) {
        this.hasScrollControls = false;
      } else {
        this.hasScrollControls = ["top", "bottom"].includes(this.placement) && this.nav.scrollWidth > this.nav.clientWidth;
      }
    }
  }
  setActiveTab(tab, options) {
    options = Object.assign({
      emitEvents: true,
      scrollBehavior: "auto"
    }, options);
    if (tab && tab !== this.activeTab && !tab.disabled) {
      const previousTab = this.activeTab;
      this.activeTab = tab;
      this.tabs.map((el) => el.active = el === this.activeTab);
      this.panels.map((el) => el.active = el.name === this.activeTab.panel);
      this.syncIndicator();
      if (["top", "bottom"].includes(this.placement)) {
        scrollIntoView(this.activeTab, this.nav, "horizontal", options.scrollBehavior);
      }
      if (options.emitEvents) {
        if (previousTab) {
          emit(this, "i2c-tab-hide", { detail: { name: previousTab.panel } });
        }
        emit(this, "i2c-tab-show", { detail: { name: this.activeTab.panel } });
      }
    }
  }
  setAriaLabels() {
    this.tabs.map((tab) => {
      const panel = this.panels.find((el) => el.name === tab.panel);
      if (panel) {
        tab.setAttribute("aria-controls", panel.getAttribute("id"));
        panel.setAttribute("aria-labelledby", tab.getAttribute("id"));
      }
    });
  }
  syncIndicator() {
    if (this.indicator) {
      const tab = this.getActiveTab();
      if (tab) {
        this.indicator.style.display = "block";
        this.repositionIndicator();
      } else {
        this.indicator.style.display = "none";
        return;
      }
    }
  }
  repositionIndicator() {
    const currentTab = this.getActiveTab();
    if (!currentTab) {
      return;
    }
    const width = currentTab.clientWidth;
    const height = currentTab.clientHeight;
    const offset = getOffset(currentTab, this.nav);
    const offsetTop = offset.top + this.nav.scrollTop;
    const offsetLeft = offset.left + this.nav.scrollLeft;
    switch (this.placement) {
      case "top":
      case "bottom":
        this.indicator.style.width = `${width}px`;
        this.indicator.style.height = "auto";
        this.indicator.style.transform = `translateX(${offsetLeft}px)`;
        break;
      case "start":
      case "end":
        this.indicator.style.width = "auto";
        this.indicator.style.height = `${height}px`;
        this.indicator.style.transform = `translateY(${offsetTop}px)`;
        break;
    }
  }
  preventIndicatorTransition() {
    const transitionValue = this.indicator.style.transition;
    this.indicator.style.transition = "none";
    requestAnimationFrame(() => {
      this.indicator.style.transition = transitionValue;
    });
  }
  syncTabsAndPanels() {
    this.tabs = this.getAllTabs();
    this.panels = this.getAllPanels();
    this.syncIndicator();
  }
  render() {
    return T`
      <div
        part="base"
        class=${e2({
      "tab-group": true,
      "tab-group--top": this.placement === "top",
      "tab-group--bottom": this.placement === "bottom",
      "tab-group--start": this.placement === "start",
      "tab-group--end": this.placement === "end",
      "tab-group--has-scroll-controls": this.hasScrollControls
    })}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container">
          ${this.hasScrollControls ? T`
                <i2c-icon-button
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  exportparts="base:scroll-button"
                  name="chevron-left"
                  library="system"
                  @click=${this.handleScrollToStart}
                ></i2c-icon-button>
              ` : ""}

          <div part="nav" class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls ? T`
                <i2c-icon-button
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  exportparts="base:scroll-button"
                  name="chevron-right"
                  library="system"
                  @click=${this.handleScrollToEnd}
                ></i2c-icon-button>
              ` : ""}
        </div>

        <div part="body" class="tab-group__body">
          <slot @slotchange=${this.syncTabsAndPanels}></slot>
        </div>
      </div>
    `;
  }
};
I2CTabGroup.styles = r(tab_group_default);
__decorateClass([
  o(".tab-group")
], I2CTabGroup.prototype, "tabGroup", 2);
__decorateClass([
  o(".tab-group__body")
], I2CTabGroup.prototype, "body", 2);
__decorateClass([
  o(".tab-group__nav")
], I2CTabGroup.prototype, "nav", 2);
__decorateClass([
  o(".tab-group__indicator")
], I2CTabGroup.prototype, "indicator", 2);
__decorateClass([
  r2()
], I2CTabGroup.prototype, "hasScrollControls", 2);
__decorateClass([
  e()
], I2CTabGroup.prototype, "placement", 2);
__decorateClass([
  e()
], I2CTabGroup.prototype, "activation", 2);
__decorateClass([
  e({ attribute: "no-scroll-controls", type: Boolean })
], I2CTabGroup.prototype, "noScrollControls", 2);
__decorateClass([
  watch("noScrollControls")
], I2CTabGroup.prototype, "updateScrollControls", 1);
__decorateClass([
  watch("placement")
], I2CTabGroup.prototype, "syncIndicator", 1);
I2CTabGroup = __decorateClass([
  n("i2c-tab-group")
], I2CTabGroup);
var tab_group_default2 = I2CTabGroup;

export {
  tab_group_default2 as tab_group_default
};
