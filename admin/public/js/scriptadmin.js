// Initialize an empty array for members
let members = [];
let editingMemberIndex = null;

// Select DOM elements
const membersList = document.getElementById('members-list');
const memberForm = document.getElementById('member-form');
const memberNameInput = document.getElementById('member-name');
const memberIdInput = document.getElementById('member-id');
const submitButton = document.getElementById('submit-btn');
const totalMembers = document.getElementById('total-members');

// Function to render the members list
function renderMembers() {
    membersList.innerHTML = '';
    members.forEach((member, index) => {
        membersList.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${member.name}</td>
                <td>
                    <button class="btn btn-warning btn-sm" onclick="editMember(${index})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteMember(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
    // Update total members count
    totalMembers.textContent = members.length;
}

// Function to handle form submission
memberForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const memberName = memberNameInput.value;

    if (editingMemberIndex !== null) {
        // Update existing member
        members[editingMemberIndex].name = memberName;
        editingMemberIndex = null;
        submitButton.textContent = 'Add Member';
    } else {
        // Add new member
        const newMember = {
            id: members.length + 1,
            name: memberName
        };
        members.push(newMember);
    }

    // Reset form
    memberForm.reset();

    // Re-render members list
    renderMembers();
});

// Function to edit a member
function editMember(index) {
    const member = members[index];
    memberNameInput.value = member.name;
    editingMemberIndex = index;
    submitButton.textContent = 'Update Member';
}

// Function to delete a member
function deleteMember(index) {
    members.splice(index, 1);
    renderMembers();
}

// Initial rendering of members list
renderMembers();
