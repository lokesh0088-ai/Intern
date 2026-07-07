
const state = {
  activeDoc: 'expense', // 'expense' or 'progress'
  common: {
    claimantName: 'Madeleine Willson',
    claimNo: '20042047',
    appId: '712041',
    submitDate: 'March 28, 2024 20:43'
  },
  
  // Exercise 1: Expense Request Data
  expense: {
    prescription: [
      { name: 'Naproxen', datePresc: 'February 28, 2024', datePurch: 'February 29, 2024', provider: 'Dr. Best', amount: '$20.00' }
    ],
    otc: [
      { name: 'Advil', datePurch: 'March 28, 2024', amount: '$8.00', seller: 'Shoppers Drug Mart', reason: 'Pain' }
    ],
    supplies: [
      { item: 'Tensor', datePurch: 'February 28, 2024', prescribed: 'Yes', provider: 'Dr. Best', amount: '$10.00', seller: 'Shoppers DrugMart' }
    ],
    parking: [
      { address: '333 St Mary Ave, Winnipeg MB R3C4A5, Canada', date: 'March 28, 2024', amount: '$10.00', meterUsed: 'yes', meterNum: '12245' }
    ],
    mileage: [
      { date: 'March 28, 2024', addressFac: 'HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada', addressWork: 'WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada', km: '20 km' }
    ],
    bustaxi: [
      { date: 'March 28, 2024', startPoint: '', addressFac: "HSC Winnipeg Women's Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada", type: 'Bus', amount: '$3.00' },
      { date: 'March 27, 2024', startPoint: '25 Furby St, Winnipeg MB R3C2A2, Canada', addressFac: '440 Edmonton St, Winnipeg MB R3B 2M4, Canada', type: 'Taxi', amount: '$15.00' }
    ]
  },

  // Exercise 2: Progress Report Data
  progress: {
    rtwStatus: 'returned', // 'missed', 'not-returned', 'returned'
    rtwReturnDate: 'March 15, 2024',
    rtwWorkDutiesReg: false,
    rtwWorkDutiesRed: false,
    rtwWorkModifiedReg: false,
    rtwWorkModifiedRed: true,
    rtwWorkOther: false,
    rtwWorkOtherText: '',
    rtwProgressDesc: 'Terrible. Testing Testing',
    rtwExpectReturnDate: '',
    rtwConcerns: '',
    rtwContactName: '',
    rtwContactDate: '',
    
    recoveryState: 'recovered', // 'not-recovered', 'recovered'
    recoveryComments: '',
    
    painScale: [false, false, false, false, false, false, false, false, false, false], // 1 to 10 checkboxes
    
    treatmentStatus: 'not-continuing', // 'not-continuing', 'continuing'
    treatmentProviderType: '',
    treatmentLastDate: '',
    treatmentLastProvider: '',
    treatmentNextDate: '',
    treatmentNextProvider: '',
    treatmentChiroPhysio: '',
    
    medicationStatus: 'not-taking', // 'not-taking', 'taking'
    medicationName: '',
    
    exercisesStatus: 'not-doing', // 'not-doing', 'doing'
    exercisesList: '',
    
    additionalInfo: 'No info Testing Testing'
  }
};

// Presets Data Definition
const presets = {
  original: {
    common: {
      claimantName: 'Madeleine Willson',
      claimNo: '20042047',
      appId: '712041',
      submitDate: 'March 28, 2024 20:43'
    },
    expense: {
      prescription: [
        { name: 'Naproxen', datePresc: 'February 28, 2024', datePurch: 'February 29, 2024', provider: 'Dr. Best', amount: '$20.00' }
      ],
      otc: [
        { name: 'Advil', datePurch: 'March 28, 2024', amount: '$8.00', seller: 'Shoppers Drug Mart', reason: 'Pain' }
      ],
      supplies: [
        { item: 'Tensor', datePurch: 'February 28, 2024', prescribed: 'Yes', provider: 'Dr. Best', amount: '$10.00', seller: 'Shoppers DrugMart' }
      ],
      parking: [
        { address: '333 St Mary Ave, Winnipeg MB R3C4A5, Canada', date: 'March 28, 2024', amount: '$10.00', meterUsed: 'yes', meterNum: '12245' }
      ],
      mileage: [
        { date: 'March 28, 2024', addressFac: 'HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada', addressWork: 'WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada', km: '20 km' }
      ],
      bustaxi: [
        { date: 'March 28, 2024', startPoint: '', addressFac: "HSC Winnipeg Women's Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada", type: 'Bus', amount: '$3.00' },
        { date: 'March 27, 2024', startPoint: '25 Furby St, Winnipeg MB R3C2A2, Canada', addressFac: '440 Edmonton St, Winnipeg MB R3B 2M4, Canada', type: 'Taxi', amount: '$15.00' }
      ]
    },
    progress: {
      rtwStatus: 'returned',
      rtwReturnDate: 'March 15, 2024',
      rtwWorkDutiesReg: false,
      rtwWorkDutiesRed: false,
      rtwWorkModifiedReg: false,
      rtwWorkModifiedRed: true,
      rtwWorkOther: false,
      rtwWorkOtherText: '',
      rtwProgressDesc: 'Terrible. Testing Testing',
      rtwExpectReturnDate: '',
      rtwConcerns: '',
      rtwContactName: '',
      rtwContactDate: '',
      recoveryState: 'recovered',
      recoveryComments: '',
      painScale: [false, false, false, false, false, false, false, false, false, false],
      treatmentStatus: 'not-continuing',
      treatmentProviderType: '',
      treatmentLastDate: '',
      treatmentLastProvider: '',
      treatmentNextDate: '',
      treatmentNextProvider: '',
      treatmentChiroPhysio: '',
      medicationStatus: 'not-taking',
      medicationName: '',
      exercisesStatus: 'not-doing',
      exercisesList: '',
      additionalInfo: 'No info Testing Testing'
    }
  },
  
  minimal: {
    common: {
      claimantName: 'John Doe',
      claimNo: '10009999',
      appId: '987654',
      submitDate: 'January 10, 2025 14:30'
    },
    expense: {
      prescription: [
        { name: 'Aspirin', datePresc: 'January 05, 2025', datePurch: 'January 06, 2025', provider: 'Dr. Smith', amount: '$5.00' }
      ],
      otc: [],
      supplies: [],
      parking: [],
      mileage: [],
      bustaxi: []
    },
    progress: {
      rtwStatus: 'missed',
      rtwReturnDate: '',
      rtwWorkDutiesReg: true,
      rtwWorkDutiesRed: false,
      rtwWorkModifiedReg: false,
      rtwWorkModifiedRed: false,
      rtwWorkOther: false,
      rtwWorkOtherText: '',
      rtwProgressDesc: 'Going great, back to work!',
      rtwExpectReturnDate: '',
      rtwConcerns: 'None.',
      rtwContactName: 'Jane Smith (HR)',
      rtwContactDate: 'January 08, 2025',
      recoveryState: 'recovered',
      recoveryComments: 'Fully healed.',
      painScale: [true, false, false, false, false, false, false, false, false, false], // Pain scale 1
      treatmentStatus: 'not-continuing',
      treatmentProviderType: '',
      treatmentLastDate: 'January 04, 2025',
      treatmentLastProvider: 'Dr. Smith',
      treatmentNextDate: '',
      treatmentNextProvider: '',
      treatmentChiroPhysio: '',
      medicationStatus: 'not-taking',
      medicationName: '',
      exercisesStatus: 'not-doing',
      exercisesList: '',
      additionalInfo: 'Returning to normal schedule.'
    }
  },
  
  overflow: {
    common: {
      claimantName: 'Alexander Overflow-Test',
      claimNo: '99998888',
      appId: '123456',
      submitDate: 'July 07, 2026 08:30'
    },
    expense: {
      prescription: [
        { name: 'Naproxen Forte', datePresc: 'June 01, 2026', datePurch: 'June 02, 2026', provider: 'Dr. Best', amount: '$45.00' },
        { name: 'Amoxicillin', datePresc: 'June 10, 2026', datePurch: 'June 11, 2026', provider: 'Dr. Best', amount: '$15.50' },
        { name: 'Ibuprofen 600mg', datePresc: 'June 15, 2026', datePurch: 'June 16, 2026', provider: 'Dr. Best', amount: '$12.00' }
      ],
      otc: [
        { name: 'Advil Liqui-Gels', datePurch: 'June 20, 2026', amount: '$14.99', seller: 'Rexall', reason: 'Back pain relief' },
        { name: 'Tylenol Extra Strength', datePurch: 'June 22, 2026', amount: '$9.99', seller: 'Shoppers Drug Mart', reason: 'Headache' }
      ],
      supplies: [
        { item: 'Knee Brace (Heavy Duty)', datePurch: 'June 05, 2026', prescribed: 'Yes', provider: 'Dr. Best', amount: '$120.00', seller: 'Physio clinic' },
        { item: 'Ice Pack Wrap', datePurch: 'June 08, 2026', prescribed: 'No', provider: '', amount: '$15.00', seller: 'Walmart' },
        { item: 'Elastic Bandages x3', datePurch: 'June 08, 2026', prescribed: 'No', provider: '', amount: '$8.50', seller: 'Shoppers DrugMart' }
      ],
      parking: [
        { address: 'HSC Winnipeg Hospital Lot A, Winnipeg, Canada', date: 'June 02, 2026', amount: '$12.00', meterUsed: 'yes', meterNum: 'P112' },
        { address: '333 St Mary Ave Lot, Winnipeg, Canada', date: 'June 08, 2026', amount: '$8.00', meterUsed: 'no', meterNum: '' },
        { address: 'Physio Clinic Parking, Winnipeg, Canada', date: 'June 15, 2026', amount: '$6.00', meterUsed: 'yes', meterNum: 'M445' }
      ],
      mileage: [
        { date: 'June 02, 2026', addressFac: 'HSC, 820 Sherbrook St, Winnipeg, Canada', addressWork: 'WCB, 333 Broadway, Winnipeg, Canada', km: '20 km' },
        { date: 'June 08, 2026', addressFac: 'Physiotherapist Clinic, 456 Main St, Winnipeg, Canada', addressWork: 'WCB, 333 Broadway, Winnipeg, Canada', km: '15 km' },
        { date: 'June 15, 2026', addressFac: 'HSC, 820 Sherbrook St, Winnipeg, Canada', addressWork: 'WCB, 333 Broadway, Winnipeg, Canada', km: '20 km' },
        { date: 'June 22, 2026', addressFac: 'Dr. Best Office, 777 Portage Ave, Winnipeg, Canada', addressWork: 'WCB, 333 Broadway, Winnipeg, Canada', km: '18 km' }
      ],
      bustaxi: [
        { date: 'June 02, 2026', startPoint: 'Home Address Winnipeg', addressFac: "HSC Winnipeg, Canada", type: 'Taxi', amount: '$22.00' },
        { date: 'June 05, 2026', startPoint: '', addressFac: "Physio Clinic, Winnipeg, Canada", type: 'Bus', amount: '$3.25' },
        { date: 'June 10, 2026', startPoint: 'Home Address Winnipeg', addressFac: "Dr. Best Office, Winnipeg, Canada", type: 'Taxi', amount: '$19.50' },
        { date: 'June 15, 2026', startPoint: '', addressFac: "HSC Winnipeg, Canada", type: 'Bus', amount: '$3.25' },
        { date: 'June 20, 2026', startPoint: 'Home Address Winnipeg', addressFac: "HSC Winnipeg, Canada", type: 'Taxi', amount: '$24.00' }
      ]
    },
    progress: {
      rtwStatus: 'returned',
      rtwReturnDate: 'June 15, 2026',
      rtwWorkDutiesReg: false,
      rtwWorkDutiesRed: true,
      rtwWorkModifiedReg: true,
      rtwWorkModifiedRed: false,
      rtwWorkOther: true,
      rtwWorkOtherText: 'Part-time light duties program coordinated with health provider.',
      rtwProgressDesc: 'Returning to work is slow and challenging. Facing some stiffness after 3 hours of continuous sitting, but working with my manager on hourly stretch breaks.',
      rtwExpectReturnDate: 'August 01, 2026',
      rtwConcerns: 'Concerned about heavy lifting tasks (above 15 lbs) which are occasionally required in my workspace, and hoping the physical therapy will help improve load capacity soon.',
      rtwContactName: 'Supervisor Mark Jenkins',
      rtwContactDate: 'June 28, 2026',
      recoveryState: 'not-recovered',
      recoveryComments: 'Making steady progress in physiotherapy but lumbar mobility remains limited. Pain level spikes during damp weather or prolonged periods of standing.',
      painScale: [false, false, false, false, true, false, false, false, false, false], // Pain scale 5
      treatmentStatus: 'continuing',
      treatmentProviderType: 'Physiotherapist',
      treatmentLastDate: 'July 02, 2026',
      treatmentLastProvider: 'Dr. Jane Best (Elite Rehab)',
      treatmentNextDate: 'July 09, 2026',
      treatmentNextProvider: 'Dr. Jane Best (Elite Rehab)',
      treatmentChiroPhysio: 'Twice a week (Tuesdays and Thursdays)',
      medicationStatus: 'taking',
      medicationName: 'Naproxen 500mg (as prescribed, twice daily)',
      exercisesStatus: 'doing',
      exercisesList: 'Lumbar extensions, core stabilization planks, hamstring stretches (3 reps of 30 seconds each, twice daily)',
      additionalInfo: 'Requesting approval for extending the physiotherapy treatments by another 4 weeks based on the clinical report attached by Dr. Best.'
    }
  }
};

// Document Height Constraints for Dynamic Pagination
// Standard A4 is 297mm height, which equals 1122px at 96 DPI.
// Margins are 20mm top & bottom (75px each). Body area height limit is ~940px.
const BODY_HEIGHT_LIMIT = 880; 

// Initial Setup on DOM Load
document.addEventListener('DOMContentLoaded', () => {
  // Inject WCB logo in the app header
  document.getElementById('wcb-brand-logo').innerHTML = WCB_LOGO_SVG;
  
  // Set up event listeners
  setupEventListeners();
  
  // Load Default Preset (original)
  loadPreset('original');
});

// Event Listeners Configuration
function setupEventListeners() {
  // Exercise Selection
  document.getElementById('select-exercise').addEventListener('change', (e) => {
    state.activeDoc = e.target.value;
    
    // Toggle Editor Form views
    if (state.activeDoc === 'expense') {
      document.getElementById('form-expense-editor').style.display = 'block';
      document.getElementById('form-progress-editor').style.display = 'none';
      // Adjust submit dates for realistic simulation
      if (state.common.submitDate.includes('March 19')) {
        state.common.submitDate = 'March 28, 2024 20:43';
        document.getElementById('input-submit-date').value = 'March 28, 2024 20:43';
      }
    } else {
      document.getElementById('form-expense-editor').style.display = 'none';
      document.getElementById('form-progress-editor').style.display = 'block';
      // Adjust submit dates for realistic simulation
      if (state.common.submitDate.includes('March 28')) {
        state.common.submitDate = 'March 19, 2024 19:21';
        document.getElementById('input-submit-date').value = 'March 19, 2024 19:21';
      }
    }
    
    syncEditorToState();
    renderPDFPreview();
  });

  // Preset Selection
  document.getElementById('select-preset').addEventListener('change', (e) => {
    loadPreset(e.target.value);
  });

  // Print button
  document.getElementById('btn-print').addEventListener('click', () => {
    window.print();
  });



  // Bind Common Details Inputs
  bindInput('input-claimant-name', 'common', 'claimantName');
  bindInput('input-claim-no', 'common', 'claimNo');
  bindInput('input-app-id', 'common', 'appId');
  bindInput('input-submit-date', 'common', 'submitDate');

  // Bind Progress Details Inputs (Exercise 2)
  bindRadio('rtw-status', 'progress', 'rtwStatus');
  bindInput('rtw-return-date', 'progress', 'rtwReturnDate');
  bindCheckbox('rtw-work-duties-reg', 'progress', 'rtwWorkDutiesReg');
  bindCheckbox('rtw-work-duties-red', 'progress', 'rtwWorkDutiesRed');
  bindCheckbox('rtw-work-modified-reg', 'progress', 'rtwWorkModifiedReg');
  bindCheckbox('rtw-work-modified-red', 'progress', 'rtwWorkModifiedRed');
  bindCheckbox('rtw-work-other', 'progress', 'rtwWorkOther');
  bindInput('rtw-work-other-text', 'progress', 'rtwWorkOtherText');
  bindInput('rtw-progress-desc', 'progress', 'rtwProgressDesc');
  bindInput('rtw-expect-return-date', 'progress', 'rtwExpectReturnDate');
  bindInput('rtw-concerns', 'progress', 'rtwConcerns');
  bindInput('rtw-contact-name', 'progress', 'rtwContactName');
  bindInput('rtw-contact-date', 'progress', 'rtwContactDate');

  bindRadio('recovery-state', 'progress', 'recoveryState');
  bindInput('recovery-comments', 'progress', 'recoveryComments');

  // Bind Pain Checkboxes
  for (let i = 1; i <= 10; i++) {
    document.getElementById(`pain-${i}`).addEventListener('change', (e) => {
      // Pain rating scale acts like radio selection or single choice
      if (e.target.checked) {
        for (let j = 1; j <= 10; j++) {
          if (j !== i) {
            state.progress.painScale[j - 1] = false;
            document.getElementById(`pain-${j}`).checked = false;
          }
        }
        state.progress.painScale[i - 1] = true;
      } else {
        state.progress.painScale[i - 1] = false;
      }
      renderPDFPreview();
    });
  }

  bindRadio('treatment-status', 'progress', 'treatmentStatus');
  bindInput('treatment-provider-type', 'progress', 'treatmentProviderType');
  bindInput('treatment-last-date', 'progress', 'treatmentLastDate');
  bindInput('treatment-last-provider', 'progress', 'treatmentLastProvider');
  bindInput('treatment-next-date', 'progress', 'treatmentNextDate');
  bindInput('treatment-next-provider', 'progress', 'treatmentNextProvider');
  bindInput('treatment-chiro-physio', 'progress', 'treatmentChiroPhysio');

  bindRadio('medication-status', 'progress', 'medicationStatus');
  bindInput('medication-name', 'progress', 'medicationName');

  bindRadio('exercises-status', 'progress', 'exercisesStatus');
  bindInput('exercises-list', 'progress', 'exercisesList');
  bindInput('additional-info', 'progress', 'additionalInfo');

  // Dynamic Row Addition Buttons (Exercise 1 Tables)
  document.querySelectorAll('.btn-add-row').forEach(button => {
    button.addEventListener('click', (e) => {
      const type = e.target.getAttribute('data-type');
      addEmptyRowToState(type);
      syncEditorToState();
      renderPDFPreview();
    });
  });
}

// Helpers to bind editor elements to global state
function bindInput(elemId, stateCategory, stateKey) {
  const el = document.getElementById(elemId);
  if (!el) return;
  el.addEventListener('input', (e) => {
    state[stateCategory][stateKey] = e.target.value;
    renderPDFPreview();
  });
}

function bindCheckbox(elemId, stateCategory, stateKey) {
  const el = document.getElementById(elemId);
  if (!el) return;
  el.addEventListener('change', (e) => {
    state[stateCategory][stateKey] = e.target.checked;
    renderPDFPreview();
  });
}

function bindRadio(radioName, stateCategory, stateKey) {
  document.querySelectorAll(`input[name="${radioName}"]`).forEach(radio => {
    radio.addEventListener('change', (e) => {
      state[stateCategory][stateKey] = e.target.value;
      renderPDFPreview();
    });
  });
}

// Load a specific preset
function loadPreset(presetName) {
  const preset = presets[presetName];
  if (!preset) return;

  // Deep clone details to active state
  state.common = JSON.parse(JSON.stringify(preset.common));
  state.expense = JSON.parse(JSON.stringify(preset.expense));
  state.progress = JSON.parse(JSON.stringify(preset.progress));

  syncEditorToState();
  renderPDFPreview();
}

// Populate Editor DOM from State
function syncEditorToState() {
  // Sync Common fields
  document.getElementById('input-claimant-name').value = state.common.claimantName;
  document.getElementById('input-claim-no').value = state.common.claimNo;
  document.getElementById('input-app-id').value = state.common.appId;
  document.getElementById('input-submit-date').value = state.common.submitDate;

  // Sync Ex 1 tables
  syncExpenseTablesEditor();

  // Sync Ex 2 fields
  // Radios
  setRadioChecked('rtw-status', state.progress.rtwStatus);
  document.getElementById('rtw-return-date').value = state.progress.rtwReturnDate;
  
  // Checkboxes
  document.getElementById('rtw-work-duties-reg').checked = state.progress.rtwWorkDutiesReg;
  document.getElementById('rtw-work-duties-red').checked = state.progress.rtwWorkDutiesRed;
  document.getElementById('rtw-work-modified-reg').checked = state.progress.rtwWorkModifiedReg;
  document.getElementById('rtw-work-modified-red').checked = state.progress.rtwWorkModifiedRed;
  document.getElementById('rtw-work-other').checked = state.progress.rtwWorkOther;
  document.getElementById('rtw-work-other-text').value = state.progress.rtwWorkOtherText;
  
  document.getElementById('rtw-progress-desc').value = state.progress.rtwProgressDesc;
  document.getElementById('rtw-expect-return-date').value = state.progress.rtwExpectReturnDate;
  document.getElementById('rtw-concerns').value = state.progress.rtwConcerns;
  document.getElementById('rtw-contact-name').value = state.progress.rtwContactName;
  document.getElementById('rtw-contact-date').value = state.progress.rtwContactDate;

  setRadioChecked('recovery-state', state.progress.recoveryState);
  document.getElementById('recovery-comments').value = state.progress.recoveryComments;

  // Pain rating checkboxes
  for (let i = 1; i <= 10; i++) {
    document.getElementById(`pain-${i}`).checked = state.progress.painScale[i - 1];
  }

  setRadioChecked('treatment-status', state.progress.treatmentStatus);
  document.getElementById('treatment-provider-type').value = state.progress.treatmentProviderType;
  document.getElementById('treatment-last-date').value = state.progress.treatmentLastDate;
  document.getElementById('treatment-last-provider').value = state.progress.treatmentLastProvider;
  document.getElementById('treatment-next-date').value = state.progress.treatmentNextDate;
  document.getElementById('treatment-next-provider').value = state.progress.treatmentNextProvider;
  document.getElementById('treatment-chiro-physio').value = state.progress.treatmentChiroPhysio;

  setRadioChecked('medication-status', state.progress.medicationStatus);
  document.getElementById('medication-name').value = state.progress.medicationName;

  setRadioChecked('exercises-status', state.progress.exercisesStatus);
  document.getElementById('exercises-list').value = state.progress.exercisesList;
  document.getElementById('additional-info').value = state.progress.additionalInfo;
}

function setRadioChecked(name, value) {
  document.querySelectorAll(`input[name="${name}"]`).forEach(radio => {
    radio.checked = (radio.value === value);
  });
}

// Synchronize the HTML tables inside left panel (Editor)
function syncExpenseTablesEditor() {
  const renderRows = (tableId, list, keys) => {
    const tbody = document.querySelector(`#${tableId} tbody`);
    tbody.innerHTML = '';
    list.forEach((item, index) => {
      const tr = document.createElement('tr');
      keys.forEach(key => {
        const td = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'text';
        input.value = item[key] || '';
        input.addEventListener('input', (e) => {
          item[key] = e.target.value;
          renderPDFPreview();
        });
        td.appendChild(input);
        tr.appendChild(td);
      });
      // Delete action button
      const actionTd = document.createElement('td');
      const btn = document.createElement('button');
      btn.className = 'btn-remove-row';
      btn.textContent = '✖';
      btn.addEventListener('click', () => {
        list.splice(index, 1);
        syncEditorToState();
        renderPDFPreview();
      });
      actionTd.appendChild(btn);
      tr.appendChild(actionTd);
      tbody.appendChild(tr);
    });
  };

  renderRows('edit-table-prescription', state.expense.prescription, ['name', 'datePresc', 'datePurch', 'provider', 'amount']);
  renderRows('edit-table-otc', state.expense.otc, ['name', 'datePurch', 'amount', 'seller', 'reason']);
  renderRows('edit-table-supplies', state.expense.supplies, ['item', 'datePurch', 'prescribed', 'provider', 'amount', 'seller']);
  renderRows('edit-table-parking', state.expense.parking, ['address', 'date', 'amount', 'meterUsed', 'meterNum']);
  renderRows('edit-table-mileage', state.expense.mileage, ['date', 'addressFac', 'addressWork', 'km']);
  renderRows('edit-table-bustaxi', state.expense.bustaxi, ['date', 'startPoint', 'addressFac', 'type', 'amount']);
}

// Add blank row to dynamic lists
function addEmptyRowToState(type) {
  switch (type) {
    case 'prescription':
      state.expense.prescription.push({ name: '', datePresc: '', datePurch: '', provider: '', amount: '' });
      break;
    case 'otc':
      state.expense.otc.push({ name: '', datePurch: '', amount: '', seller: '', reason: '' });
      break;
    case 'supplies':
      state.expense.supplies.push({ item: '', datePurch: '', prescribed: '', provider: '', amount: '', seller: '' });
      break;
    case 'parking':
      state.expense.parking.push({ address: '', date: '', amount: '', meterUsed: '', meterNum: '' });
      break;
    case 'mileage':
      state.expense.mileage.push({ date: '', addressFac: '', addressWork: '', km: '' });
      break;
    case 'bustaxi':
      state.expense.bustaxi.push({ date: '', startPoint: '', addressFac: '', type: 'Bus', amount: '' });
      break;
  }
}

// ==========================================================================
// DYNAMIC PAGINATION ENGINE
// Splits content blocks or rows across virtual A4 pages
// ==========================================================================
function renderPDFPreview() {
  const container = document.getElementById('preview-container');
  container.innerHTML = ''; // Clear preview

  const pages = [];
  let currentPage = createNewPageHTML(1);
  pages.push(currentPage);
  container.appendChild(currentPage.element);

  // Helper: Get height of current page body
  const getCurrentBodyHeight = () => {
    return currentPage.body.scrollHeight;
  };

  // Helper: Append block to page and return if it exceeded
  const appendBlockAndCheckOverflow = (blockHtml) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = blockHtml;
    const blockElement = tempDiv.firstElementChild;
    currentPage.body.appendChild(blockElement);

    if (getCurrentBodyHeight() > BODY_HEIGHT_LIMIT) {
      // Remove it
      currentPage.body.removeChild(blockElement);
      // Spawn new page
      currentPage = createNewPageHTML(pages.length + 1);
      pages.push(currentPage);
      container.appendChild(currentPage.element);
      // Append to new page body
      currentPage.body.appendChild(blockElement);
    }
  };

  // Render Exercise 1: Expense Request
  if (state.activeDoc === 'expense') {
    // 1. Claimant intro statement
    const introHtml = `<div class="pdf-intro-statement">
      <span class="claimant-name">${escapeHTML(state.common.claimantName)}</span> requested reimbursement for the following medical and/or travel expenses:
    </div>`;
    appendBlockAndCheckOverflow(introHtml);

    // Render Table Sections
    renderExpenseTableGroup("Prescription Drugs", state.expense.prescription, 
      ["Drug Name", "Prescription Date", "Date Purchased", "Healthcare Provider Name", "Paid Amount"],
      ["name", "datePresc", "datePurch", "provider", "amount"], 
      appendBlockAndCheckOverflow, getCurrentBodyHeight, () => {
        currentPage = createNewPageHTML(pages.length + 1);
        pages.push(currentPage);
        container.appendChild(currentPage.element);
      }
    );

    renderExpenseTableGroup("Over-the-Counter Drugs", state.expense.otc, 
      ["Drug Name", "Date Purchased", "Paid Amount", "Seller's Name", "Reason for Purchasing"],
      ["name", "datePurch", "amount", "seller", "reason"], 
      appendBlockAndCheckOverflow, getCurrentBodyHeight, () => {
        currentPage = createNewPageHTML(pages.length + 1);
        pages.push(currentPage);
        container.appendChild(currentPage.element);
      }
    );

    renderExpenseTableGroup("Bandages, Braces or Other Medical Supplies", state.expense.supplies, 
      ["Item Purchased", "Date Purchased", "Was this Prescribed?", "Healthcare Provider Name", "Paid Amount", "Seller's Name"],
      ["item", "datePurch", "prescribed", "provider", "amount", "seller"], 
      appendBlockAndCheckOverflow, getCurrentBodyHeight, () => {
        currentPage = createNewPageHTML(pages.length + 1);
        pages.push(currentPage);
        container.appendChild(currentPage.element);
      }
    );

    renderExpenseTableGroup("Parking for Medical Appointments", state.expense.parking, 
      ["Address of Healthcare Provider/Medical Facility", "Date", "Paid Amount", "Meter Used?", "Meter Number"],
      ["address", "date", "amount", "meterUsed", "meterNum"], 
      appendBlockAndCheckOverflow, getCurrentBodyHeight, () => {
        currentPage = createNewPageHTML(pages.length + 1);
        pages.push(currentPage);
        container.appendChild(currentPage.element);
      }
    );

    renderExpenseTableGroup("Mileage to Medical Appointments", state.expense.mileage, 
      ["Appointment Date", "Address of Healthcare Provider/Medical Facility", "Address of Workplace", "Number of km (Round Trip)"],
      ["date", "addressFac", "addressWork", "km"], 
      appendBlockAndCheckOverflow, getCurrentBodyHeight, () => {
        currentPage = createNewPageHTML(pages.length + 1);
        pages.push(currentPage);
        container.appendChild(currentPage.element);
      },
      "The WCB will generally reimburse only those transportation costs which are in excess of costs that would be incurred by the worker while travelling to and from work."
    );

    renderExpenseTableGroup("Bus or Taxi Fare for Medical Appointments", state.expense.bustaxi, 
      ["Appointment Date", "Address of Starting Point", "Address of Healthcare Provider/Medical Facility", "Bus or Taxi (indicate one)", "Total Fare Paid"],
      ["date", "startPoint", "addressFac", "type", "amount"], 
      appendBlockAndCheckOverflow, getCurrentBodyHeight, () => {
        currentPage = createNewPageHTML(pages.length + 1);
        pages.push(currentPage);
        container.appendChild(currentPage.element);
      },
      "*Note: Pre-approval is required from your WCB representative to claim taxi fare(s)."
    );

    // Privacy Notice Declaration Checkbox Block (Ex 1)
    const declarationHtml = `
      <div style="margin-top: 15px;">
        <div class="pdf-declaration-checkbox-item">
          <div class="pdf-checkbox-box checked"></div>
          <div class="pdf-checkbox-label" style="font-family: system-ui, -apple-system, sans-serif; font-size: 10pt; line-height: 1.45;">
            I understand that the <span class="pdf-link">Privacy Notice</span> applies to the personal information collected in this document.
          </div>
        </div>
      </div>
    `;
    appendBlockAndCheckOverflow(declarationHtml);
  }

  // Render Exercise 2: Worker Progress Report
  else if (state.activeDoc === 'progress') {
    // 1. Claimant intro statement
    const introHtml = `<div class="pdf-intro-statement">
      <span class="claimant-name">${escapeHTML(state.common.claimantName)}</span> provided the following updates in relation to their claim:
    </div>`;
    appendBlockAndCheckOverflow(introHtml);

    // 2. Return to Work section group
    const rtwStatusHtml = `
      <div class="pdf-group-box">
        <div class="pdf-group-title" style="font-weight: bold; color: #000; font-size: 9.5pt; border-bottom: 1.5px solid #000; padding-bottom: 4px; margin-bottom: 8px;">Return to Work</div>
        <div class="pdf-checkbox-row" style="margin-bottom: 12px;">
          <span style="font-weight: bold; width: 80px;">Select one:</span>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <div class="pdf-checkbox-item">
              <div class="pdf-checkbox-box ${state.progress.rtwStatus === 'missed' ? 'checked' : ''}"></div>
              <span class="pdf-checkbox-label">I have not missed time from work</span>
            </div>
            <div class="pdf-checkbox-item">
              <div class="pdf-checkbox-box ${state.progress.rtwStatus === 'not-returned' ? 'checked' : ''}"></div>
              <span class="pdf-checkbox-label">I have not returned to work</span>
            </div>
            <div class="pdf-checkbox-item">
              <div class="pdf-checkbox-box ${state.progress.rtwStatus === 'returned' ? 'checked' : ''}"></div>
              <span class="pdf-checkbox-label">I returned to work on:</span>
              <span class="pdf-underlined-value" style="min-width: 150px;">${escapeHTML(state.progress.rtwReturnDate)}</span>
              <span style="font-size: 7.5pt; color: #666; margin-left: 5px;">Date</span>
            </div>
          </div>
        </div>

        <div class="pdf-checkbox-row" style="border-top: 1px solid #ddd; padding-top: 8px; margin-bottom: 12px;">
          <span style="font-weight: bold; width: 80px;">I am working:</span>
          <div class="pdf-checkbox-inline-grid" style="flex: 1;">
            <div class="pdf-checkbox-item">
              <div class="pdf-checkbox-box ${state.progress.rtwWorkDutiesReg ? 'checked' : ''}"></div>
              <span class="pdf-checkbox-label">Full duties, regular hours</span>
            </div>
            <div class="pdf-checkbox-item">
              <div class="pdf-checkbox-box ${state.progress.rtwWorkDutiesRed ? 'checked' : ''}"></div>
              <span class="pdf-checkbox-label">Full duties, reduced hours</span>
            </div>
            <div class="pdf-checkbox-item">
              <div class="pdf-checkbox-box ${state.progress.rtwWorkModifiedReg ? 'checked' : ''}"></div>
              <span class="pdf-checkbox-label">Modified duties, regular hours</span>
            </div>
            <div class="pdf-checkbox-item">
              <div class="pdf-checkbox-box ${state.progress.rtwWorkModifiedRed ? 'checked' : ''}"></div>
              <span class="pdf-checkbox-label">Modified duties, reduced hours</span>
            </div>
            <div class="pdf-checkbox-item" style="width: 100%;">
              <div class="pdf-checkbox-box ${state.progress.rtwWorkOther ? 'checked' : ''}"></div>
              <span class="pdf-checkbox-label">Other:</span>
              <span class="pdf-underlined-value" style="flex: 1; min-width: 250px;">${escapeHTML(state.progress.rtwWorkOtherText)}</span>
            </div>
          </div>
        </div>

        <div style="margin-bottom: 12px;">
          <div style="font-weight: bold;">My return to work is going:</div>
          <div class="pdf-text-container-box" style="min-height: 12mm;">${escapeHTML(state.progress.rtwProgressDesc)}</div>
        </div>

        <div style="margin-bottom: 12px; display: flex; align-items: center;">
          <span style="font-weight: bold;">I expect to return to work on:</span>
          <span class="pdf-underlined-value" style="width: 180px;">${escapeHTML(state.progress.rtwExpectReturnDate)}</span>
          <span style="font-size: 7.5pt; color: #666; margin-left: 5px;">Date</span>
        </div>

        <div style="margin-bottom: 12px;">
          <div style="font-weight: bold;">I have the following concerns about returning to work:</div>
          <div class="pdf-text-container-box" style="min-height: 20mm;">${escapeHTML(state.progress.rtwConcerns)}</div>
        </div>

        <div style="display: flex; gap: 20px; align-items: center;">
          <span style="font-weight: bold;">I was most recently in contact with:</span>
          <span class="pdf-underlined-value" style="flex: 1;">${escapeHTML(state.progress.rtwContactName)}</span>
          <span style="font-size: 7.5pt; color: #666; margin-right: 15px;">(Name of employer contact)</span>
          <span style="font-weight: bold;">on</span>
          <span class="pdf-underlined-value" style="width: 120px;">${escapeHTML(state.progress.rtwContactDate)}</span>
          <span style="font-size: 7.5pt; color: #666;">Date</span>
        </div>
      </div>
    `;
    appendBlockAndCheckOverflow(rtwStatusHtml);

    // 3. Recovery section group
    const recoveryHtml = `
      <div class="pdf-group-box">
        <div class="pdf-group-title" style="font-weight: bold; color: #000; font-size: 9.5pt; border-bottom: 1.5px solid #000; padding-bottom: 4px; margin-bottom: 8px;">Recovery</div>
        <div class="pdf-checkbox-row" style="margin-bottom: 12px;">
          <span style="font-weight: bold; width: 80px;">Select one:</span>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <div class="pdf-checkbox-item">
              <div class="pdf-checkbox-box ${state.progress.recoveryState === 'not-recovered' ? 'checked' : ''}"></div>
              <span class="pdf-checkbox-label">I have not fully recovered from my workplace injury.</span>
            </div>
            <div class="pdf-checkbox-item">
              <div class="pdf-checkbox-box ${state.progress.recoveryState === 'recovered' ? 'checked' : ''}"></div>
              <span class="pdf-checkbox-label">I have fully recovered from my workplace injury.</span>
            </div>
          </div>
        </div>
        <div>
          <div style="font-weight: bold;">I have provided the following comments about my recovery:</div>
          <div class="pdf-text-container-box" style="min-height: 20mm;">${escapeHTML(state.progress.recoveryComments)}</div>
        </div>
      </div>
    `;
    appendBlockAndCheckOverflow(recoveryHtml);

    // 4. Pain scale rating
    let painScaleHtml = `
      <div style="margin-bottom: 5mm; font-family: system-ui, -apple-system, sans-serif; font-size: 9.5pt;">
        <div style="font-weight: bold; margin-bottom: 6px;">I rate my current pain/discomfort on a scale of 1-10, where 1 is no pain and 10 is severe pain out of 10.</div>
        <div class="pdf-pain-grid">
    `;
    for (let i = 1; i <= 10; i++) {
      painScaleHtml += `
        <div class="pdf-pain-item">
          <div class="pdf-checkbox-box ${state.progress.painScale[i - 1] ? 'checked' : ''}"></div>
          <span>${i}</span>
        </div>
      `;
    }
    painScaleHtml += `
        </div>
      </div>
    `;
    appendBlockAndCheckOverflow(painScaleHtml);

    // 5. Medical treatment continuation details
    const treatmentHtml = `
      <div class="pdf-group-box">
        <div class="pdf-checkbox-row" style="margin-bottom: 12px;">
          <span style="font-weight: bold; width: 80px;">Select one:</span>
          <div style="display: flex; flex-direction: column; gap: 8px; flex: 1;">
            <div class="pdf-checkbox-item">
              <div class="pdf-checkbox-box ${state.progress.treatmentStatus === 'not-continuing' ? 'checked' : ''}"></div>
              <span class="pdf-checkbox-label">I am not continuing to receive medical treatment for my workplace injury.</span>
            </div>
            <div class="pdf-checkbox-item" style="width: 100%;">
              <div class="pdf-checkbox-box ${state.progress.treatmentStatus === 'continuing' ? 'checked' : ''}"></div>
              <span class="pdf-checkbox-label">I am continuing to receive medical treatment for my workplace injury from:</span>
              <span class="pdf-underlined-value" style="flex: 1; min-width: 120px;">${escapeHTML(state.progress.treatmentProviderType)}</span>
              <span style="font-size: 7.5pt; color: #666; margin-left: 5px;">(Medical Provider Type)</span>
            </div>
          </div>
        </div>

        <div style="display: flex; gap: 15px; margin-bottom: 8px;">
          <span style="font-weight: bold; width: 200px;">My last medical treatment was</span>
          <span class="pdf-underlined-value" style="width: 120px;">${escapeHTML(state.progress.treatmentLastDate)}</span>
          <span style="font-size: 7.5pt; color: #666; width: 40px; text-align: center;">Date</span>
          <span style="font-weight: bold;">from</span>
          <span class="pdf-underlined-value" style="flex: 1;">${escapeHTML(state.progress.treatmentLastProvider)}</span>
          <span style="font-size: 7.5pt; color: #666; min-width: 110px;">(Medical Provider Name)</span>
        </div>

        <div style="display: flex; gap: 15px; margin-bottom: 8px;">
          <span style="font-weight: bold; width: 200px;">My next medical treatment is</span>
          <span class="pdf-underlined-value" style="width: 120px;">${escapeHTML(state.progress.treatmentNextDate)}</span>
          <span style="font-size: 7.5pt; color: #666; width: 40px; text-align: center;">Date</span>
          <span style="font-weight: bold;">from</span>
          <span class="pdf-underlined-value" style="flex: 1;">${escapeHTML(state.progress.treatmentNextProvider)}</span>
          <span style="font-size: 7.5pt; color: #666; min-width: 110px;">(Medical Provider Name)</span>
        </div>

        <div style="display: flex; align-items: center; margin-bottom: 12px; border-top: 1px solid #eee; padding-top: 8px;">
          <span style="font-weight: bold;">I am attending a Chiropractor or Physiotherapist</span>
          <span class="pdf-underlined-value" style="flex: 1; margin-left: 10px;">${escapeHTML(state.progress.treatmentChiroPhysio)}</span>
          <span style="font-size: 7.5pt; color: #666; margin-left: 5px;">(Frequency)</span>
        </div>

        <div class="pdf-checkbox-row" style="border-top: 1px solid #eee; padding-top: 8px; margin-bottom: 12px;">
          <span style="font-weight: bold; width: 80px;">Select one:</span>
          <div style="display: flex; flex-direction: column; gap: 8px; flex: 1;">
            <div class="pdf-checkbox-item">
              <div class="pdf-checkbox-box ${state.progress.medicationStatus === 'not-taking' ? 'checked' : ''}"></div>
              <span class="pdf-checkbox-label">I am not taking medication for my workplace injury.</span>
            </div>
            <div class="pdf-checkbox-item" style="width: 100%;">
              <div class="pdf-checkbox-box ${state.progress.medicationStatus === 'taking' ? 'checked' : ''}"></div>
              <span class="pdf-checkbox-label">I am taking medication for my workplace injury:</span>
              <span class="pdf-underlined-value" style="flex: 1; min-width: 150px;">${escapeHTML(state.progress.medicationName)}</span>
              <span style="font-size: 7.5pt; color: #666; margin-left: 5px;">(Name of prescribed medication)</span>
            </div>
          </div>
        </div>

        <div class="pdf-checkbox-row" style="border-top: 1px solid #eee; padding-top: 8px; margin-bottom: 8px;">
          <span style="font-weight: bold; width: 80px;">Select one:</span>
          <div style="display: flex; flex-direction: column; gap: 8px; flex: 1;">
            <div class="pdf-checkbox-item">
              <div class="pdf-checkbox-box ${state.progress.exercisesStatus === 'not-doing' ? 'checked' : ''}"></div>
              <span class="pdf-checkbox-label">I am not doing home exercises for my workplace injury.</span>
            </div>
            <div class="pdf-checkbox-item">
              <div class="pdf-checkbox-box ${state.progress.exercisesStatus === 'doing' ? 'checked' : ''}"></div>
              <span class="pdf-checkbox-label">I am doing home exercises for my workplace injury.</span>
            </div>
          </div>
        </div>

        <div style="margin-bottom: 5px;">
          <div style="font-weight: bold;">List the exercises you are doing:</div>
          <div class="pdf-text-container-box" style="min-height: 12mm;">${escapeHTML(state.progress.exercisesList)}</div>
        </div>
      </div>
    `;
    appendBlockAndCheckOverflow(treatmentHtml);

    // 6. Other Info / Comments Box
    const otherInfoHtml = `
      <div class="pdf-group-box">
        <div class="pdf-group-title" style="font-weight: bold; color: #000; font-size: 9.5pt; border-bottom: 1.5px solid #000; padding-bottom: 4px; margin-bottom: 8px;">Other Information</div>
        <div style="font-weight: bold;">I would like to provide the following additional information about my claim/injury:</div>
        <div class="pdf-text-container-box" style="min-height: 12mm; margin-bottom: 0;">${escapeHTML(state.progress.additionalInfo)}</div>
      </div>
    `;
    appendBlockAndCheckOverflow(otherInfoHtml);

    // 7. Certifications & Declarations (Always page-split appropriately)
    const certDeclarationHtml = `
      <div style="margin-top: 10px; font-family: system-ui, -apple-system, sans-serif; font-size: 9.5pt; line-height: 1.45;">
        <div class="pdf-declaration-checkbox-item" style="margin-bottom: 12px;">
          <div class="pdf-checkbox-box checked"></div>
          <div class="pdf-checkbox-label">
            I certify that the information given on this form is true, correct and complete to the best of my knowledge. I agree to notify the Workers Compensation Board of Manitoba (WCB) immediately once I return to any form of work and/or employment. I understand that it is an offence to knowingly make a false statement to the WCB. I also understand that it is an offence to withhold information from WCB which affects my entitlement to compensation (e.g., full or partial recovery from injury, ability to return to work, sources of additional income, etc.). I understand that refusing to co-operate with, or follow my treatment, may result in the WCB reducing or suspending my benefits.
          </div>
        </div>
        <div class="pdf-declaration-checkbox-item">
          <div class="pdf-checkbox-box checked"></div>
          <div class="pdf-checkbox-label">
            I understand that the <span class="pdf-link">Privacy Notice</span> applies to the personal information collected in this document.
          </div>
        </div>
      </div>
    `;
    appendBlockAndCheckOverflow(certDeclarationHtml);
  }

  // Finalize Page Count & Footer Pages Number updates
  const totalPages = pages.length;
  pages.forEach((p, idx) => {
    p.footerPageVal.textContent = `Page ${idx + 1} of ${totalPages}`;
  });
}

/**
 * Creates and wraps the table layout inside a section header.
 * If rows are large, the rows themselves split and flow onto subsequent pages.
 */
function renderExpenseTableGroup(title, dataArray, headerCols, keys, appendFn, heightFn, newPageFn, subtitleText = "") {
  // If list is empty, we don't render the table section at all
  if (!dataArray || dataArray.length === 0) return;

  const sectionHeaderHtml = `
    <div>
      <h3 class="pdf-section-title">${escapeHTML(title)}</h3>
      ${subtitleText ? `<p class="pdf-section-subtitle">${escapeHTML(subtitleText)}</p>` : ''}
    </div>
  `;
  appendFn(sectionHeaderHtml);

  // Compile Table structure
  const compileTableHeader = () => {
    let html = `<table class="pdf-table"><thead><tr>`;
    headerCols.forEach(col => {
      html += `<th>${escapeHTML(col)}</th>`;
    });
    html += `</tr></thead><tbody>`;
    return html;
  };

  const getRowHtml = (rowItem) => {
    let html = `<tr>`;
    keys.forEach(key => {
      html += `<td>${escapeHTML(rowItem[key] || '')}</td>`;
    });
    html += `</tr>`;
    return html;
  };

  // Find the active container representing the current page body
  let pageWrapper = document.getElementById('preview-container');
  let activePageDiv = pageWrapper.lastElementChild;
  let activeBodyDiv = activePageDiv.querySelector('.pdf-body');

  let tableHtml = compileTableHeader();
  let tempTable = document.createElement('div');
  tempTable.innerHTML = tableHtml + `</tbody></table>`;
  let tableElement = tempTable.firstElementChild;
  activeBodyDiv.appendChild(tableElement);
  let tbodyElement = tableElement.querySelector('tbody');

  dataArray.forEach(row => {
    const trHtml = getRowHtml(row);
    const tempTr = document.createElement('tbody');
    tempTr.innerHTML = trHtml;
    const trElement = tempTr.firstElementChild;
    tbodyElement.appendChild(trElement);

    // Check if adding this row triggers page overflow
    if (activeBodyDiv.scrollHeight > BODY_HEIGHT_LIMIT) {
      // Remove row
      tbodyElement.removeChild(trElement);
      
      // Close active table
      // If table now contains no rows, we can remove the empty table
      if (tbodyElement.children.length === 0) {
        activeBodyDiv.removeChild(tableElement);
      }

      // Trigger new page creation
      newPageFn();

      // Recalculate references to the new page
      activePageDiv = pageWrapper.lastElementChild;
      activeBodyDiv = activePageDiv.querySelector('.pdf-body');

      // Append repeated header on the new page
      const continuedHeader = `<div><h3 class="pdf-section-title">${escapeHTML(title)} (Continued)</h3></div>`;
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = continuedHeader;
      activeBodyDiv.appendChild(tempDiv.firstElementChild);

      // Re-create the table structure on new page
      tableHtml = compileTableHeader();
      tempTable = document.createElement('div');
      tempTable.innerHTML = tableHtml + `</tbody></table>`;
      tableElement = tempTable.firstElementChild;
      activeBodyDiv.appendChild(tableElement);
      tbodyElement = tableElement.querySelector('tbody');

      // Add the overflowed row to the new table
      tbodyElement.appendChild(trElement);
    }
  });
}

// Reusable virtual page structure creator
function createNewPageHTML(pageNumber) {
  const pageDiv = document.createElement('div');
  pageDiv.className = 'pdf-page';
  
  const titleText = state.activeDoc === 'expense' ? 'Medical & Travel Expense Request' : 'Worker Progress Report';
  const wpTag = state.activeDoc === 'progress' ? '<div class="wp-tag">WP</div>' : '';

  // Setup A4 layout HTML
  pageDiv.innerHTML = `
    <div class="pdf-header">
      <div class="pdf-header-left">
        ${WCB_LOGO_SVG}
      </div>
      <div class="pdf-header-middle">
        333 Broadway<br>
        Winnipeg, MB R3C 4W3<br>
        Phone: (204) 954-4321<br>
        Toll Free: 1-855-954-4321<br>
        wcb.mb.ca
      </div>
      <div class="pdf-header-right">
        <h2>${titleText}</h2>
        <div class="pdf-claim-box">
          Claim No. <span class="claim-no-val">${escapeHTML(state.common.claimNo)}</span>
          ${wpTag}
        </div>
      </div>
    </div>
    <div class="pdf-body"></div>
    <div class="pdf-footer">
      <div class="pdf-footer-left">
        <span>Worker App ID: <span class="app-id-val">${escapeHTML(state.common.appId)}</span></span>
      </div>
      <div class="pdf-footer-middle">
        <span>Submitted: <span class="submit-date-val">${escapeHTML(state.common.submitDate)}</span></span>
      </div>
      <div class="pdf-footer-right">
        <span class="page-num-val">Page ${pageNumber} of ?</span>
      </div>
    </div>
  `;

  return {
    element: pageDiv,
    body: pageDiv.querySelector('.pdf-body'),
    footerPageVal: pageDiv.querySelector('.page-num-val')
  };
}

// XSS Safe HTML Escape
function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

