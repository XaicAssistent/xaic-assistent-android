package com.xaicassistant.xaicassistent;

import android.app.Dialog;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class RegisterActivity extends AppCompatActivity {

    Dialog myDialog;
    Button btn;
    Button btnCompany;
    Button btnUser;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        myDialog = new Dialog(this);

                myDialog.setContentView(R.layout.user_type);
                btnCompany  =(Button) myDialog.findViewById(R.id.btnCompany);
                btnUser = (Button) myDialog.findViewById(R.id.btnUser);
                btnCompany.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        Log.d("opcion","empresa");
                        myDialog.dismiss();
                    }
                });
                btnUser.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        Log.d("opcion","usuario");
                        myDialog.dismiss();
                    }
                });

                myDialog.getWindow().setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
                myDialog.show();
            }


}
