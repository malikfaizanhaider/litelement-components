import{L as t,h as a,a as e,_ as i,c as o}from"./5295e7c1.js";let n,r,s=t=>t,l=class extends t{render(){return a(n||(n=s`
        <div class='grid-container'>
            <section class='wide'>
                <lit-pagination></lit-pagination>
            </section>
            <section class='row offset-1 tall'>
                <div>
                    <cm-button variant="cta" size="s" dir="ltr" focusable="" tabindex="0" role="button">
                        Click Me
                    </cm-button>
                    <cm-button variant="cta" size="m" dir="ltr" focusable="" tabindex="0" role="button">
                        Click Me
                    </cm-button>
                    <cm-button variant="cta" size="l" dir="ltr" focusable="" tabindex="0" role="button">
                        Click Me
                    </cm-button>
                    
                    <cm-button variant="primary" size="s" dir="ltr" focusable="" tabindex="0" role="button">
                        Click Me
                    </cm-button>
                    <cm-button variant="primary" size="m">CTA</cm-button>
                    <cm-button variant="primary" size="l">Primary</cm-button>
                    
                    <cm-button variant="secondary" size="s">Secondary</cm-button>
                    <cm-button variant="secondary" size="m">Secondary</cm-button>
                    <cm-button variant="negative">Negative</cm-button>
                    
                    <cm-action-button variant="cta" toggles>Toggle button</cm-action-button>
                    <sp-action-group>
                        <cm-action-button size="m" selected>Selected</cm-action-button>
                        <cm-action-button size="m" disabled>Disabled</cm-action-button>
                    </sp-action-group>
                    <div>
                        <div>
                            <vaadin-button class="cm-button" theme="icon rounded primary" aria-label="Delete item">
                                <iron-icon icon="vaadin:pencil"></iron-icon>
                            </vaadin-button>
                            </vaadin-button>
                            <vaadin-button class="cm-button" theme="icon rounded primary outline" aria-label="Delete item">
                                <iron-icon icon="vaadin:inbox"></iron-icon>
                            </vaadin-button>
                            <vaadin-button class="cm-button" theme="icon primary" aria-label="Delete item">
                                <iron-icon icon="vaadin:vaadin:wrench"></iron-icon>
                            </vaadin-button>
                            <vaadin-button class="cm-button" theme="icon primary outline" aria-label="Delete item">
                                <iron-icon icon="vaadin:plug"></iron-icon>
                            </vaadin-button>
                        </div>
                    
                        <vaadin-button class="cm-button" theme="icon rounded" aria-label="Delete item">
                            <iron-icon style='margin: 0; padding: 0' icon="vaadin:chevron-down-small"></iron-icon>
                        </vaadin-button>
                        <vaadin-button class="cm-button" theme="icon rounded small" aria-label="Delete item">
                            <iron-icon style='margin: 0; padding: 0' icon="vaadin:chevron-down-small"></iron-icon>
                        </vaadin-button>
                        <vaadin-button style='cursor:pointer;' class='cm-button'
                                       theme='icon  rounded xxs-small' slot='trigger'
                                       label='bottom test' dir='ltr' variant='cta' focusable='' tabindex='0'
                                       role='button' aria-label='bottom test'>
                            <iron-icon style='margin: 0; padding: 0' icon="vaadin:chevron-down-small"></iron-icon>
                        </vaadin-button>
                    </div>
                    <div>
                        <vaadin-button class="cm-button" theme="primary">
                            <iron-icon icon="vaadin:pencil"></iron-icon> Download
                        </vaadin-button>
                        <vaadin-button class="cm-button">Secondary</vaadin-button>
                        <vaadin-button class="cm-button" theme="primary outline">Primary Outline</vaadin-button>
                        <vaadin-button class="cm-button" theme="rounded primary">Primary</vaadin-button>
                        <vaadin-button class="cm-button" theme="block primary large">Large</vaadin-button>
                        <vaadin-button class="cm-button" theme="block primary">Normal</vaadin-button>
                        <vaadin-button class="cm-button" theme="block primary small">Normal</vaadin-button>
                    </div>
                </div>
            </section>
            <section>
                <overlay-trigger type="modal" placement="none">
                    <cm-dialog-wrapper
                        underlay
                        dismissable
                        slot="click-content"
                        headline="Delete Record"
                        confirm-label="Keep Both"
                        cancel-label="Cancel"
                        size='large'>
                        Are you sure to delete this record.
                    </cm-dialog-wrapper>
                    <cm-button slot="trigger" variant="primary">Toggle Dialog</cm-button>
                </overlay-trigger>
            </section>
            <section class='offset-1 tall'>
                <cm-search></cm-search>
                <br>
                <div style='width: 100%; margin-bottom: 12px'>
                    <cm-field-label for='name-3'>Public Field (quietly)</cm-field-label>
                    <cm-textfield label='asdasdasd' id='name-3' placeholder='Enter your name' quiet></cm-textfield>
                </div>
                <div style='width: 100%; margin-bottom: 12px'>
                    <cm-field-label for='name-0'>Name</cm-field-label>
                    <cm-textfield id='name-0' placeholder='Enter your name'></cm-textfield>
                </div>
                <div style='width: 100%; margin-bottom: 12px'>
                    <cm-field-label for='name-1'>Name</cm-field-label>
                    <cm-textfield
                        id='name-1'
                        placeholder='Enter your name'
                        valid
                        value='My Name'
                    ></cm-textfield>
                </div>
                <div style='width: 100%; margin-bottom: 12px'>
                    <cm-field-label for='name-2'>Name</cm-field-label>
                    <cm-textfield id='name-2' invalid placeholder='Enter your name'></cm-textfield>
                </div>
            </section>
            <section class='offset-1 tall'>
                <cm-toast open variant="info">
                    This is negative information that you should read, soon.
                </cm-toast>
                <br>
                <cm-toast open variant="info" theme='outline'>
                    This is negative information that you should read, soon.
                </cm-toast>
                <br>
                <cm-toast open variant="negative">
                    This is positive information that you should read, soon.
                </cm-toast>
                <br>
                <cm-toast open variant="negative" theme='outline'>
                    This is positive information that you should read, soon.
                </cm-toast>
                <br>
                <cm-toast open variant="positive">
                    This is positive information that you should read, soon.
                </cm-toast>
                <br>
                <cm-toast open variant="positive" theme='outline'>
                    This is positive information that you should read, soon.
                </cm-toast>
                <br>
                <cm-toast open variant="warning">
                    This is positive information that you should read, soon.
                </cm-toast>
                <br>
                <cm-toast open variant="warning" theme='outline'>
                    This is positive information that you should read, soon.
                </cm-toast>
                <br>
                <cm-toast open>
                    This is positive information that you should read, soon.
                </cm-toast>
            </section>
            <section>
                <overlay-trigger id="trigger" placement='right-start' offset='0' type="replace" width='200' class='i2cMainNav'>
                    <vaadin-button  slot='trigger' class='cm-button' theme='primary'>Open Overlay Trigger</vaadin-button>

                    <cm-popover dialog   slot="click-content" class='i2c-menu-overlay' style='padding: 0'>
                        <div class='header' style='display: flex; align-items: center; justify-content: space-between; padding: var(--cm-popover-dialog-padding); border-bottom: 1px solid var(--i2c-contrast-10pct)'>
                            <div style=" font-size: var(--i2c-font-size-l); text-transform: uppercase; font-weight: 600; ">Program Management</div>
                            <cm-search autocomplete="off"></cm-search>
                        </div>
                        <div style='padding: 0 var(--cm-popover-dialog-padding)'>
                            <div>
                                <h5 style='font-size: var(--i2c-font-size-xs); text-transform: uppercase; margin-top: 1rem; margin-bottom: 1rem;'>General</h5>
                                <vaadin-details theme='reverse i2c-menus'>
                                    <div slot='summary'>Analytics</div>

                                    <vaadin-vertical-layout>
                                        <a href='#'>Dashboard</a>
                                        <a href='#'>Reports</a>
                                        <a href='#'>Data sources</a>
                                    </vaadin-vertical-layout>
                                </vaadin-details>

                                <vaadin-details theme='reverse i2c-menus'>
                                    <div slot='summary'>Customers</div>

                                    <vaadin-vertical-layout>
                                        <a href='#'>Accounts</a>
                                        <a href='#'>Contacts</a>
                                    </vaadin-vertical-layout>
                                </vaadin-details>

                                <vaadin-details theme='reverse i2c-menus'>
                                    <div slot='summary'>Finances</div>

                                    <vaadin-vertical-layout>
                                        <a href='#'>Invoices</a>
                                        <a href='#'>Transactions</a>
                                        <a href='#'>Statements</a>
                                    </vaadin-vertical-layout>
                                </vaadin-details>
                            </div>
                            <div>
                                <h5 style='font-size: var(--i2c-font-size-xs); text-transform: uppercase; margin-top: 1rem; margin-bottom: 1rem;'>Card Program Setup</h5>
                                <vaadin-details theme='reverse i2c-menus'>
                                    <div slot='summary'>Customers</div>
                                    <vaadin-vertical-layout>
                                        <a href='#'>Accounts</a>
                                        <a href='#'>Contacts</a>
                                    </vaadin-vertical-layout>
                                </vaadin-details>
                                <vaadin-details theme='reverse i2c-menus'>
                                    <div slot='summary'>Analytics</div>

                                    <vaadin-vertical-layout>
                                        <a href='#'>Dashboard</a>
                                        <a href='#'>Reports</a>
                                        <a href='#'>Data sources</a>
                                    </vaadin-vertical-layout>
                                </vaadin-details>
                                <vaadin-details theme='reverse i2c-menus'>
                                    <div slot='summary'>Finances</div>

                                    <vaadin-vertical-layout>
                                        <a href='#'>Invoices</a>
                                        <a href='#'>Transactions</a>
                                        <a href='#'>Statements</a>
                                    </vaadin-vertical-layout>
                                </vaadin-details>
                            </div>
                        </div>
                    </cm-popover>
                </overlay-trigger>
                <overlay-trigger id="trigger5" placement='auto' offset='0' type="modal">

                    <vaadin-button  slot='trigger' class='cm-button' theme='primary'>Open Overlay with auto placement</vaadin-button>

                    <cm-popover  dialog  slot="click-content" tip>
                        <cm-toast open="" variant="negative" dir="ltr" size='s'>
                            Invalid User Name or password. 
                        </cm-toast>
                        <br>
                        <vaadin-text-field required class='square-input-style' label='User Name' clear-button-visible></vaadin-text-field>
                        <vaadin-password-field style='width: 100%' class='square-input-style' label='Password' helper-text='Choose a strong password'></vaadin-password-field>
                        <vaadin-button class="cm-button" theme="block primary">Login</vaadin-button>
                        <br>
                        <vaadin-button class="cm-button" theme="tertiary block">Cancel</vaadin-button>
                    </cm-popover>
                </overlay-trigger>
            </section>
            <section class='offset-1 tall'>
                <overlay-trigger placement='top' offset='0'>
                    <vaadin-button dragable style='cursor:pointer;' class='cm-button'
                                   theme='icon highlight rounded xxs-small' slot='trigger'
                                   label='bottom test' dir='ltr' variant='cta' focusable='' tabindex='0'
                                   role='button' size='m' aria-label='bottom test'>
                        <iron-icon style='margin: 0; padding: 0' icon="vaadin:chevron-down-small"></iron-icon>
                    </vaadin-button>
                    
                    <cm-tooltip open variant='info' size='large' slot='hover-content' dir='ltr'>
                        <strong style='margin:0'>Tooltip</strong>
                        <div>Context Menu</div>
                    </cm-tooltip>
                </overlay-trigger>
                <overlay-trigger placement='right-start' offset='0'>
                    <vaadin-button dragable style='cursor:pointer;' class='cm-button'
                                   theme='icon highlight primary outline small' slot='trigger'
                                   label='bottom test' dir='ltr' variant='cta' focusable='' tabindex='0'
                                   role='button' size='m' aria-label='bottom test'>
                        <iron-icon style='margin: 0; padding: 0' icon="vaadin:chevron-down-small"></iron-icon>
                    </vaadin-button>

                    <cm-tooltip open variant='positive' size='large' slot='hover-content' dir='ltr'>
                        <iron-icon slot="icon" icon="vaadin:check-circle"></iron-icon>
                        <strong style='margin:0'>Tooltip</strong>
                        <div>Context Menu</div>
                    </cm-tooltip>
                </overlay-trigger>
                <overlay-trigger placement='top-end' offset='0' size='s' >
                    <vaadin-button dragable style='cursor:pointer;' class='cm-button'
                                   theme='icon highlight rounded' slot='trigger'
                                   label='bottom test' dir='ltr' variant='cta' focusable='' tabindex='0'
                                   role='button' size='m' aria-label='bottom test'>
                        <iron-icon style='margin: 0; padding: 0' icon="vaadin:chevron-down-small"></iron-icon>
                    </vaadin-button>

                    <cm-tooltip open variant='negative' slot='hover-content' dir='ltr'>
                        <strong style='margin:0'>Tooltip</strong>
                        <div>Context Menu</div>
                    </cm-tooltip>
                </overlay-trigger>
                
                <cm-tooltip open placement="top-end" variant="info">
                    <iron-icon slot="icon" icon="vaadin:check-circle"></iron-icon> 

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </cm-tooltip>
<br>
                <cm-tooltip open placement="top-end">
                    <iron-icon slot="icon" icon="vaadin:coffee"></iron-icon>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </cm-tooltip>
                
            </section>
            <section>
                <div
                    style="width: 250px; height: 150px; display: flex; align-items: center; justify-content: space-around;"
                >
                    <cm-progress-circle
                        label="A small representation of a somewhat completed action"
                        progress="71"
                        size="small"
                    ></cm-progress-circle>
                    <cm-progress-circle
                        label="A medium representation of a recently started action"
                        progress="22"
                    ></cm-progress-circle>
                    <cm-progress-circle
                        label="A large representation of an almost completed action"
                        progress="5"
                        size="large"
                    ></cm-progress-circle>
                </div>
                <div
                    style="width: 250px; height: 150px; display: flex; align-items: center; justify-content: space-around;"
                >
                    <cm-progress-circle
                        label="A small representation of an unclear amount of work"
                        indeterminate
                        size="small"
                    ></cm-progress-circle>
                    <cm-progress-circle
                        label="A medium representation of an unclear amount of work"
                        indeterminate
                    ></cm-progress-circle>
                    <cm-progress-circle
                        label="A large representation of an unclear amount of work"
                        indeterminate
                        size="large"
                    ></cm-progress-circle>
                </div>
            </section>
        </div>
    `))}};l.styles=e(r||(r=s`

      .grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          grid-gap: 16px;
      }

      .grid-container section {
          min-width: 200px;
          height: 200px;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          box-shadow: 0 0 0 1px var(--lumo-contrast-10pct);
          border-radius: var(--lumo-border-radius);
          background-color: var(--lumo-base-color);
          padding: 16px 24px;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
      }

      .grid-container section.offset-1 {
          align-items: flex-start;
      }
      .grid-container .tall {
         /* grid-row: auto / span 2;
          height: calc(400px + 16px);*/

          grid-row: auto / span 3;
          height: calc(750px);
      }

      .grid-container .row {
         align-items: flex-start;
          justify-content: flex-start;
          flex-direction: row;
      }

      .grid-container .wide {
          grid-column: auto / span 2;
      }

      cm-button, cm-action-button, vaadin-button {
          margin-bottom: 1rem;
          margin-right: 0.5rem;
      }

      cm-search, cm-textfield {
          width: 100%;
      }
  `)),l=i([o("lit-i2c-components")],l);export{l as LitButtons};
