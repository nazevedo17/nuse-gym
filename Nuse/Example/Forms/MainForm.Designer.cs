namespace Example.Forms
{
    partial class MainForm
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.buttonDatabase = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // buttonDatabase
            // 
            this.buttonDatabase.Location = new System.Drawing.Point(12, 12);
            this.buttonDatabase.Name = "buttonDatabase";
            this.buttonDatabase.Size = new System.Drawing.Size(125, 50);
            this.buttonDatabase.TabIndex = 0;
            this.buttonDatabase.Text = "Database";
            this.buttonDatabase.UseVisualStyleBackColor = true;
            this.buttonDatabase.Click += new System.EventHandler(this.buttonDatabase_Click);
            // 
            // MainForm
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(11F, 28F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(769, 479);
            this.Controls.Add(this.buttonDatabase);
            this.Margin = new System.Windows.Forms.Padding(6, 9, 6, 9);
            this.Name = "MainForm";
            this.Text = "Nuse";
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Button buttonDatabase;
    }
}

