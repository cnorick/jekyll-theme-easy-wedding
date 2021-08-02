import { Collapse, Modal } from 'bootstrap';
import { docReady, MD5 } from './helpers';

async function rsvp(form, alertWrapper, inviteCodeElement, rsvpModal, rsvpYesModal, rsvpNoModal) {
    for (var i = 0; i < form.elements.length; i++) {
        if (form.elements[i].value === '' && form.elements[i].hasAttribute('required')) {
            return false;
        }
    }

    alertWrapper.innerHTML = alert_markup('info', '<strong>Just a sec!</strong> We\'re saving your details.');
    if (jekyll_globals.use_rsvp_code && MD5(inviteCodeElement.value) !== jekyll_globals.rsvp_code_md5) {
        alertWrapper.innerHTML = alert_markup('danger', '<strong>Sorry!</strong> The code you entered is incorrect.');
    } else {
        const data = createPostData(form);
        try {
            await makeRsvpPost(data);
            alertWrapper.innerHTML = '';
            rsvpModal.hide();
            if (data.attending) {
                rsvpYesModal.show();
            }
            else {
                rsvpNoModal.show();
            }
        } catch (e) {
            alertWrapper.innerHTML = alert_markup('danger', '<strong>Sorry!</strong> There is some issue with the server.');
            console.error(e);
        }
    }
};

async function makeRsvpPost(data) {
    const response = await fetch(jekyll_globals.rsvp_post_address, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': jekyll_globals.api_key,
        },
        redirect: 'follow', // manual, *follow, error
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error(`Error making RSVP POST: ${response.status} ${response.statusText}`);
    }
}

function createPostData(form) {
    const formData = objectifyForm(form);
    return {
        names: [formData.name1, formData.name2, formData.name3, formData.name4].filter(Boolean),
        phone: formData.phone,
        songs: formData.song,
        attending: formData.rsvpRadio === "yes",
        message: formData.message,
        code: formData.invite_code,
    }
}

function objectifyForm(form) {
    const formData = new FormData(form);
    return [...formData.entries()].reduce((acc, [k, v]) => ({
        ...acc,
        [k]: v,
    }), {})
}

// alert_markup
function alert_markup(alert_type, msg) {
    return '<div class="alert alert-' + alert_type + '" role="alert">' + msg + `<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`;
}


docReady(() => {
    const extraGuestsCollapse = new Collapse(document.getElementById('guest-names-collapse'), {toggle: false});
    const primaryGuestInput = document.getElementById('primary-guest');
    const warningText = new Collapse(document.getElementById('rsvp-warning-text'), {toggle: false});
    const rsvpHelpToggle = document.getElementById('rsvp-help-toggle');
    const rsvpCodeHelpText = new Collapse(document.getElementById('rsvp-code-help-text'), {toggle: false});
    const rsvpForm = document.getElementById('rsvp-form');
    const phoneInput = document.getElementById('phone-input');
    const phoneHelp = new Collapse(document.getElementById('phone-help'), {toggle: false});
    const alertWrapper = document.getElementById('alert-wrapper');
    const inviteCodeElement = document.getElementById('invite-code');
    const rsvpModal = new Modal(document.getElementById('rsvp-modal'), {keyboard: true});
    const rsvpYesModal = new Modal(document.getElementById('rsvp-yes-modal'), {keyboard: true});
    const rsvpNoModal = new Modal(document.getElementById('rsvp-no-modal'), {keyboard: true});

    primaryGuestInput.onfocus = () => {
        extraGuestsCollapse.show();
        warningText.show();
    };

    primaryGuestInput.onblur = () => {
        if(!primaryGuestInput.value) {
            extraGuestsCollapse.hide();
            warningText.hide();
        }
    };

    rsvpHelpToggle.onclick = () => {
        rsvpCodeHelpText.toggle();
    };

    rsvpForm.onsubmit = (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        rsvp(rsvpForm, alertWrapper, inviteCodeElement, rsvpModal, rsvpYesModal, rsvpNoModal);
    }

    phoneInput.onfocus = () => {
        phoneHelp.show();
    };
});
